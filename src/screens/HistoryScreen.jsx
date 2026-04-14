import { Link } from 'react-router-dom'

function HistoryScreen({ history }) {
  return (
    <div>
      <h1>Workout History</h1>
      <Link to="/">Back to planner</Link>

      {history.length === 0 && <p>No routines generated yet.</p>}

      {history.map(entry => (
        <div key={entry.id}>
          <p>{entry.name} — {entry.routine}</p>
        </div>
      ))}
    </div>
  )
}

export default HistoryScreen

