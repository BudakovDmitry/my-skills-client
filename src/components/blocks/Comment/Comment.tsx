const Comment = () => {
  return (
    <div className="col-start-1 col-end-8 p-3 rounded-lg">
      <div className="flex flex-row items-center">
        <div
          className="flex items-center justify-center h-10 w-10 rounded-full bg-sky-800 flex-shrink-0 text-white"
        >
          A
        </div>
        <div
          className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
        >
          <div>Hey How are you today?</div>
        </div>
      </div>
    </div>
  )
}

export default Comment