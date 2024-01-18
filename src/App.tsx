import { Route, Routes } from 'react-router-dom'
import WebWorkerExample from './WebWorkerExample'
import Providers from './providers'
import '@fontsource/inter'

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
