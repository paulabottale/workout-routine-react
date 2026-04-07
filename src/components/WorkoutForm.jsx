function WorkoutForm({ formData, setFormData, generateRoutine }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Your name"
        value={formData.personName}
        onChange={(e) => setFormData({ ...formData, personName: e.target.value })}
      />

      <input
        type="number"
        placeholder="Your age"
        value={formData.personAge}
        onChange={(e) => setFormData({ ...formData, personAge: e.target.value })}
      />

      <select
        value={formData.workoutLevel}
        onChange={(e) => setFormData({ ...formData, workoutLevel: e.target.value })}
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
        onChange={(e) => setFormData({ ...formData, workoutTime: e.target.value })}
      />

      <button onClick={generateRoutine}>Generate Routine</button>
    </div>
  )
}

export default WorkoutForm