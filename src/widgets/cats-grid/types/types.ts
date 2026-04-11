import type { Grid } from 'react-window';

type OnCellsRendered = NonNullable<React.ComponentProps<typeof Grid>['onCellsRendered']>;

export type CellsRange = Parameters<OnCellsRendered>[0];
