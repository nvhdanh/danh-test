import { lazy } from 'react';
import NonLazy from './NonLazy';
const Lazy = lazy(() => import('./Lazy'));

const LazyLoading = () => {
  return (
    <>
      <NonLazy />
      <Lazy />
    </>
  );
};

export default LazyLoading;
