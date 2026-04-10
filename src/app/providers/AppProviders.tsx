import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface AppProvidersProps {
  children: ReactNode;
}

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <BrowserRouter basename={basename}>{children}</BrowserRouter>;
};
