import { useState } from 'react'

function App() {

  const [formData, setFormData] = useState({
    personName:"",
    personAge:"",
    workoutLevel:"",
    workoutTime:""
  })

  const [result, setResult] = useState("")

  function generateRoutine() {
    const {personName, personAge, workoutLevel, workoutTime} = formData

    //validaciones
    if(!personName) return setResult("Please enter a valid name")
    if(!personAge || personAge <= 0) return setResult("Please enter a valid age")
    if(personAge < 15) return setResult("You have to be older than 15 to workout")
    if(!workoutLevel) return setResult("Please select a workout level")
    if(!workoutTime || workoutTime <= 0) return setResult("Please enter a valid workout time")

    //tipo de rutina
    let routineModel = ""
    if (workoutLevel === "beginner") routineModel = "light full body routine"
    else if (workoutLevel === "intermediate") routineModel = "moderate routine by muscle groups"
    else if (workoutLevel === "advanced") routineModel = "intense routine by muscle groups"

    //ajuste por tiempo
    if (workoutTime < 30) routineModel += " (quick session)"
    else if (workoutTime <= 60) routineModel += " (standard session)"
    else routineModel += " (complete session)"

    setResult(`${personName}, your recommended routine is: ${routineModel}`)

  }

  return (
    <div>
      <h1>Smart Workout Planner</h1>

      <input 
      type="text"
      placeholder="Your name"
      value={formData.personName}
      onChange={(e) => setFormData({...formData,personName: e.target.value})}
      />

      <input 
      type="number"
      placeholder="Your age"
      value={formData.personAge}
      onChange={(e) => setFormData({...formData,personAge: e.target.value})}
      />

      <select
        value={formData.workoutLevel}
        onChange={(e) => setFormData({...formData,workoutLevel: e.target.value})}
      >
        <option value="">Select level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>

      <input 
      type="number"
      placeholder="Workout time (minutes)"
      value={formData.workoutTime}
      // ...formData es un spread operator, lo que hace es copiar todos los valores actuales del objeto y solo pisar el campo que cambió. Si no lo hicieras, cada vez que actualizás un campo perderías los demás
      onChange={(e) => setFormData({...formData,workoutTime: e.target.value})}
      />

      <button onClick={generateRoutine}>Generate Routine</button>

      {result && <p>{result}</p>}

    </div>
    )
}

export default App
