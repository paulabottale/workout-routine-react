import { useState } from 'react'
import WorkoutForm from '../components/WorkoutForm'
import RoutineDisplay from '../components/RoutineDisplay'
import { Link } from 'react-router-dom'

function HomeScreen({history, setHistory}) {
  const [formData, setFormData] = useState({
    personName: "",
    personAge: "",
    workoutLevel: "",
    workoutTime: ""
  })

  const [result, setResult] = useState("")

  async function generateRoutine() {
  const { personName, personAge, workoutLevel, workoutTime } = formData

  if (!personName) return setResult("Please enter a valid name")
  if (!workoutLevel) return setResult("Please select a workout level")
  if (!workoutTime || workoutTime <= 0) return setResult("Please enter a valid workout time")
  if (!personAge || personAge <= 0) return setResult("Please enter a valid age")
  if (personAge < 15) return setResult("You have to be older than 15 years old to workout")

  setResult("Generating your routine... 💪")

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/routine`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personName,
        personAge,
        workoutLevel,
        workoutTime
      })
    })

    const data = await response.json()
    setResult(data.routine)

  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const day = now.getDate().toString().padStart(2, '0')
  const month = (now.getMonth() + 1).toString().padStart(2, '0')

  const newEntry = {
    id: Date.now(),
    name: personName,
    routine: data.routine,
    date: `${day}/${month}`,
    time: `${hours}:${minutes}`
  }

  setHistory(prev => [...prev, newEntry])
  
} catch (error) {
    setResult("Error connecting to server. Please try again.")
  }
}

  return (
  <div className="min-h-screen bg-stone-100 text-stone-800 flex flex-col items-center py-10 px-4">
    <h1 className="text-4xl font-bold mb-8 text-stone-900">Smart Workout Planner 💪</h1>
    <Link to="/history" className="mb-6 text-pink-400 hover:text-pink-300 underline">
      Ver historial
    </Link>
    <WorkoutForm
      formData={formData}
      setFormData={setFormData}
      generateRoutine={generateRoutine}
    />
    <RoutineDisplay result={result} />
  </div>
)
}

export default HomeScreen