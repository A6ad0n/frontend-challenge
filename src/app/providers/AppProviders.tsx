import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from './query-provider';
import { NetworkProvider } from './network-provider';

interface AppProvidersProps {
  children: ReactNode;
}

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <QueryProvider>
    <NetworkProvider>
      <BrowserRouter basename={basename}>{children}</BrowserRouter>
    </NetworkProvider>
  </QueryProvider>
);
