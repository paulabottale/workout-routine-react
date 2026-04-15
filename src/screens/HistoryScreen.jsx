import { Link } from 'react-router-dom'
import { useState } from 'react'

function HistoryScreen({ history, clearHistory, deleteEntry }) {
  const [showModal, setShowModal] = useState(false)
  const [entryToDelete, setEntryToDelete] = useState(null)

  function handleDeleteEntry(id) {
    setEntryToDelete(id)
    setShowModal(true)
  }

  function handleClearHistory() {
    setEntryToDelete(null)
    setShowModal(true)
  }

  function handleConfirm() {
    if (entryToDelete) {
      deleteEntry(entryToDelete)
    } else {
      clearHistory()
    }
    setShowModal(false)
    setEntryToDelete(null)
  }

  function handleCancel() {
    setShowModal(false)
    setEntryToDelete(null)
  }


  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold mb-8 text-stone-900">Workout History 📋</h1>

      <Link to="/" className="mb-6 text-pink-400 hover:text-pink-300 underline">
        Back to planner
      </Link>

      {history.length === 0 && (
        <p className="text-stone-500 mt-4">No routines generated yet.</p>
      )}

      {history.length > 0 && (
        <button
          onClick={handleClearHistory}
          className="mb-6 bg-stone-900 text-white rounded-lg px-4 py-2 text-sm hover:bg-pink-400 transition-colors"
        >
          Clear history
        </button>
      )}

      <div className="flex flex-col gap-4 w-full max-w-md">
        {history.map(entry => (
          <div key={entry.id} className="bg-white border border-stone-200 rounded-lg px-6 py-4">
            <div className="flex justify-between items-center mb-1">
              <p className="font-semibold text-stone-900">{entry.name}</p>
              <div className="flex items-center gap-3">
                <p className="text-stone-400 text-xs">{entry.date} · {entry.time}</p>
                <button
                  onClick={() => handleDeleteEntry(entry.id)}
                  className="text-stone-400 hover:text-pink-400 text-xs transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
            <p className="text-stone-600 text-sm">{entry.routine}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl px-8 py-6 max-w-sm w-full mx-4 flex flex-col gap-4">
            <p className="text-stone-900 font-semibold text-center">
              {entryToDelete 
                ? "Are you sure you want to delete this routine?" 
                : "Are you sure you want to clear all history?"
              }
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded-lg bg-stone-900 text-white hover:bg-pink-400 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HistoryScreen

