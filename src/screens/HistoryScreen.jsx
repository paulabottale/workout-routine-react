import { Link } from 'react-router-dom'

function HistoryScreen({ history }) {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-stone-900">Workout History 📋</h1>

      <Link to="/" className="mb-6 text-pink-400 hover:text-pink-300 underline">
        Back to planner
      </Link>

      {history.length === 0 && (
        <p className="text-stone-500 mt-4">No routines generated yet.</p>
      )}

      <div className="flex flex-col gap-4 w-full max-w-md">
        {history.map(entry => (
          <div key={entry.id} className="bg-white border border-stone-200 rounded-lg px-6 py-4">
            <p className="font-semibold text-stone-900">{entry.name}</p>
            <p className="text-stone-600 text-sm mt-1">{entry.routine}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HistoryScreen








/*import { Link } from 'react-router-dom'

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

export default HistoryScreen*/

