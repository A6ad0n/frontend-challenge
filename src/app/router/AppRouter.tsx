import { Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from './routes';
import { AllCatsPage } from '@/pages/all-cats';
import { FavoriteCatsPage } from '@/pages/favorite-cats';
import { NotFoundPage } from '@/pages/not-found';

export const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.root} element={<Navigate to={ROUTES.cats} replace />} />
    <Route path={ROUTES.cats} element={<AllCatsPage />} />
    <Route path={ROUTES.favorites} element={<FavoriteCatsPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
