import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from './routes';
import { AllCatsPage } from '@/pages/all-cats';
const FavoriteCatsPage = lazy(() =>
  import('@/pages/favorite-cats').then((module) => ({ default: module.FavoriteCatsPage }))
);
const NotFoundPage = lazy(() =>
  import('@/pages/not-found').then((module) => ({ default: module.NotFoundPage }))
);

export const AppRouter = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route path={ROUTES.root} element={<Navigate to={ROUTES.cats} replace />} />
      <Route path={ROUTES.cats} element={<AllCatsPage />} />
      <Route path={ROUTES.favorites} element={<FavoriteCatsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>
);
