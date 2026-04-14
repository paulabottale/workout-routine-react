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

  function generateRoutine() {
    const { personName, personAge, workoutLevel, workoutTime } = formData

    if (!personName) return setResult("Please enter a valid name")
    if (!workoutLevel) return setResult("Please select a workout level")
    if (!workoutTime || workoutTime <= 0) return setResult("Please enter a valid workout time")
    if (!personAge || personAge <= 0) return setResult("Please enter a valid age")
    if (personAge < 15) return setResult("You have to be older than 15 years old to workout")

    let tipoDeRutina = ""
    if (workoutLevel === "beginner") tipoDeRutina = "light full body routine"
    else if (workoutLevel === "intermediate") tipoDeRutina = "moderate routine by muscle groups"
    else if (workoutLevel === "advanced") tipoDeRutina = "intense routine by muscle groups"

    if (workoutTime < 30) tipoDeRutina += " (quick session)"
    else if (workoutTime <= 60) tipoDeRutina += " (standard session)"
    else tipoDeRutina += " (complete session)"

    const newEntry = {
      id: Date.now(),
      name: personName,
      routine: tipoDeRutina
    }

    setHistory([...history, newEntry])

    setResult(`${personName}, your recommended routine is: ${tipoDeRutina}`)
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