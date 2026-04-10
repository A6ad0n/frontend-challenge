import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from './query-provider';

interface AppProvidersProps {
  children: ReactNode;
}

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <QueryProvider>
    <BrowserRouter basename={basename}>{children}</BrowserRouter>
  </QueryProvider>
);
