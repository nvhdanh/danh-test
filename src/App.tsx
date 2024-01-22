import { Route, Routes } from 'react-router-dom'
import WebWorkerExample from './examples/WebWorkerExample'
import Providers from './providers'
import '@fontsource/inter'
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'

const App = () => {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<WebWorkerExample />} />
      </Routes>
    </Providers>
  )
}

export default App
