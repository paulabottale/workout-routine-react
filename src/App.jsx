import { useState } from 'react'

function App() {

  const [formData, setFormData] = useState({
    personName:"",
    personAge:"",
    workoutLevel:"",
    workoutTime:""
  })

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

      <button onClick={() => console.log(formData)}>Generate Routine</button>

    </div>
    )
}

export default App
