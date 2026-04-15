function RoutineDisplay({ result }) {
  return (
    <>
      {result && (
        <div className="mt-6 w-full max-w-md bg-white border border-pink-200 rounded-lg px-6 py-4 text-stone-800">
          <p className="font-semibold">{result}</p>
        </div>
      )}
    </>
  )
}

export default RoutineDisplay
