function WorkoutForm({ formData, setFormData, generateRoutine }) {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <input
        type="text"
        placeholder="Your name"
        value={formData.personName}
        onChange={(e) => setFormData({ ...formData, personName: e.target.value })}
        className="border border-stone-300 rounded-lg px-4 py-2 bg-white text-stone-800 focus:outline-none focus:border-pink-400"
      />

      <input
        type="number"
        placeholder="Your age"
        value={formData.personAge}
        onChange={(e) => setFormData({ ...formData, personAge: e.target.value })}
        className="border border-stone-300 rounded-lg px-4 py-2 bg-white text-stone-800 focus:outline-none focus:border-pink-400"
      />

      <select
        value={formData.workoutLevel}
        onChange={(e) => setFormData({ ...formData, workoutLevel: e.target.value })}
        className="border border-stone-300 rounded-lg px-4 py-2 bg-white text-stone-800 focus:outline-none focus:border-pink-400"
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
        className="border border-stone-300 rounded-lg px-4 py-2 bg-white text-stone-800 focus:outline-none focus:border-pink-400"
      />

      <button
        onClick={generateRoutine}
        className="bg-stone-900 text-white rounded-lg px-4 py-2 font-semibold hover:bg-pink-400 transition-colors"
      >
        Generate Routine
      </button>
    </div>
  )
}

export default WorkoutForm