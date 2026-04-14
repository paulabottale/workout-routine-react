import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import HistoryScreen from './screens/HistoryScreen'

function App() {
  const [history, setHistory] = useState([])

  return (
    <Routes>
      <Route path="/" element={<HomeScreen history={history} setHistory={setHistory} />} />
      <Route path="/history" element={<HistoryScreen history={history} />} />
    </Routes>
  )
}

export default App


