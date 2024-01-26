import '@fontsource/inter';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import GridLayout from './examples/GridLayout';
import LazyLoading from './examples/LazyLoading';
import WebWorker from './examples/WebWorker';
import Providers from './providers';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

const App = () => {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="web-worker" element={<WebWorker />} />
          <Route path="lazy-loading" element={<LazyLoading />} />
          <Route path="grid-layout" element={<GridLayout />} />
        </Route>
      </Routes>
    </Providers>
  );
};

export default App;
