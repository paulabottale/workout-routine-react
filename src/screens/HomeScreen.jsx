import { useState } from 'react'
import WorkoutForm from '../components/WorkoutForm'
import RoutineDisplay from '../components/RoutineDisplay'
import { Link } from 'react-router-dom'

function HomeScreen() {
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

    setResult(`${personName}, your recommended routine is: ${tipoDeRutina}`)
  }

  return (
    <div>
      <h1>Smart Workout Planner</h1>
      <Link to="/history">Ver historial</Link>
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