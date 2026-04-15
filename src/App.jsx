import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HomeScreen from './screens/HomeScreen'
import HistoryScreen from './screens/HistoryScreen'

function App() {
  const [history, setHistory] = useState([])

  useEffect(() => {
  const savedHistory = localStorage.getItem("workoutHistory")
  if (savedHistory) {
    setHistory(JSON.parse(savedHistory))
  }
}, [])

useEffect(() => {
  if (history.length > 0) {
    localStorage.setItem("workoutHistory", JSON.stringify(history))
  }
}, [history])

  return (
    <Routes>
      <Route path="/" element={<HomeScreen history={history} setHistory={setHistory} />} />
      <Route path="/history" element={<HistoryScreen history={history} />} />
    </Routes>
  )
}

export default App


