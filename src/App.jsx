import { Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import HistoryScreen from './screens/HistoryScreen'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/history" element={<HistoryScreen />} />
    </Routes>
  )
}

export default App


