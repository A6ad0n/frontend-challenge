import { Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from './routes';

export const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.root} element={<Navigate to={ROUTES.cats} replace />} />
    <Route path={ROUTES.cats} element={<div>Cats</div>} />
    <Route path={ROUTES.favorites} element={<div>Favorites</div>} />
  </Routes>
);
