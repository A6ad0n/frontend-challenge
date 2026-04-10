import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import type { AliasOptions } from 'vite';
import viteConfigExport from '../../../vite.config';
import vitestConfig from '../../../vitest.unit.config';
import storybookConfig from '../../../.storybook/main';
import { describe, expect, it } from 'vitest';

interface TsConfigApp {
  compilerOptions?: {
    paths?: Record<string, string>;
  };
}

const projectRoot = path.resolve(__dirname, '../../..');

const normalizeAliasKey = (key: string) => key.replace(/\/\*$/, '');
const normalizeAliasPath = (aliasPath: string) =>
  path.normalize(path.resolve(projectRoot, aliasPath.replace(/\/\*$/, '')));

const readTsPath = (): Record<string, string> => {
  const tsConfigAppPath = path.resolve(projectRoot, 'tsconfig.app.json');
  const raw = fs.readFileSync(tsConfigAppPath, 'utf8');
  const parsedConfig = ts.parseConfigFileTextToJson(tsConfigAppPath, raw);

  if (parsedConfig.error) {
    throw new Error(ts.flattenDiagnosticMessageText(parsedConfig.error.messageText, '\n'));
  }

  const parsed = (parsedConfig.config ?? {}) as TsConfigApp;
  const pathsMap = parsed.compilerOptions?.paths ?? {};

  return Object.fromEntries(
    Object.entries(pathsMap).map(([alias, target]) => [
      normalizeAliasKey(alias),
      normalizeAliasPath(target[0]),
    ])
  );
};

const readAliasMap = (aliasOptions: AliasOptions | undefined): Record<string, string> => {
  if (!aliasOptions || Array.isArray(aliasOptions)) {
    throw new Error('Expected resolve.alias to be an object map');
  }

  return Object.fromEntries(
    Object.entries(aliasOptions).map(([alias, target]) => [alias, path.normalize(target)])
  );
};

const getViteAliasMap = async (): Promise<Record<string, string>> => {
  const config =
    typeof viteConfigExport === 'function'
      ? await viteConfigExport({
          command: 'serve',
          mode: 'test',
          isSsrBuild: false,
          isPreview: false,
        })
      : viteConfigExport;
  return readAliasMap(config.resolve?.alias);
};

const getStorybookAliasMap = async (): Promise<Record<string, string>> => {
  const viteFinal = storybookConfig.viteFinal;

  if (!viteFinal) {
    throw new Error('Expected Storybook config to define viteFinal');
  }

  type StorybookViteFinal = NonNullable<typeof storybookConfig.viteFinal>;
  type StorybookViteFinalConfig = Parameters<StorybookViteFinal>[0];

  const config = await viteFinal({} as StorybookViteFinalConfig);

  return readAliasMap(config.resolve?.alias);
};

const getVitestAliasMap = (): Record<string, string> => readAliasMap(vitestConfig.resolve?.alias);

describe('alias consistency', () => {
  it('keeps Vite aliases in sync with ts.config.app paths', async () => {
    const tsAliases = readTsPath();
    const viteAliases = await getViteAliasMap();

    expect(Object.keys(tsAliases).sort()).toEqual(Object.keys(viteAliases).sort());

    for (const [alias, tsPath] of Object.entries(tsAliases)) {
      expect(viteAliases[alias]).toBe(tsPath);
    }
  });

  it('keeps Vitest aliases in sync with ts.config.app paths', () => {
    const tsAliases = readTsPath();
    const vitestAliases = getVitestAliasMap();

    expect(Object.keys(tsAliases).sort()).toEqual(Object.keys(vitestAliases).sort());

    for (const [alias, tsPath] of Object.entries(tsAliases)) {
      expect(vitestAliases[alias]).toBe(tsPath);
    }
  });

  it('keeps Storybook aliases in sync with ts.config.app paths', async () => {
    const tsAliases = readTsPath();
    const storybookAliases = await getStorybookAliasMap();

    expect(Object.keys(tsAliases).sort()).toEqual(Object.keys(storybookAliases).sort());

    for (const [alias, tsPath] of Object.entries(tsAliases)) {
      expect(storybookAliases[alias]).toBe(tsPath);
    }
  });
});
