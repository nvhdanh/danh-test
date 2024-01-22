import { Route, Routes } from 'react-router-dom'
import Providers from './providers'
import '@fontsource/inter'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import WebWorker from './examples/WebWorker'

const App = () => {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<WebWorker />} />
      </Routes>
    </Providers>
  )
}

export default App
