import { Link } from 'react-router-dom'

function HistoryScreen() {
  return (
    <div>
      <h1>Workout History</h1>
      <p>Your past routines will appear here.</p>
      <Link to="/">Back to planner</Link>
    </div>
  )
}

export default HistoryScreen

