

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-400 grid grid-cols-2 grid-rows-2 gap-4 p-4">
      <div className="border border-black grid grid-cols-3 p-3 place-items-center">
        <div className="w-8/10 h-5/6 bg-gray-400 shadow-2xl border rounded-xl border-gray"></div>
        <div className="w-8/10 h-5/6 bg-gray-400 shadow-2xl border rounded-xl border-gray"></div>
        <div className="w-8/10 h-5/6 bg-gray-400 shadow-2xl border rounded-xl border-gray"></div>
        <div className="w-8/10 h-5/6 col-span-2 bg-gray-400 shadow-2xl border rounded-xl border-gray"></div>
        <div className="w-8/10 h-5/6  bg-gray-400 shadow-2xl border rounded-xl border-gray"></div>
        <div className="w-8/10 h-5/6 bg-gray-400 shadow-2xl border rounded-xl border-gray"></div>
        <div className="w-8/10 h-5/6 col-span-2 bg-gray-400 shadow-2xl border rounded-xl border-gray"></div>        {/* <div className="w-5/6 h-5/6 bg-gray-400 shadow-2xl border rounded-xl border-black"></div> */}
      </div>

      <div className="border border-black grid grid-cols-2 grid-rows-4 place-items-center">
        <div className="w-6/8 p-4 h-16 border border-black rounded-xl shadow-2xl"></div>
        <div className="w-6/8 p-4 h-16 border border-black rounded-xl shadow-2xl"></div>
        <div className="w-6/8 p-4 h-16 border border-black rounded-xl shadow-2xl"></div>
        <div className="w-6/8 p-4 h-16 border border-black rounded-xl shadow-2xl"></div>
        <div className="w-6/8 p-4 h-16 border border-black rounded-xl shadow-2xl"></div>
        <div className="w-6/8 p-4 h-16 border border-black rounded-xl shadow-2xl"></div>
        <div className="w-6/8 p-4 h-16 border border-black rounded-xl shadow-2xl"></div>
        <div className="w-6/8 p-4 h-16 border border-black rounded-xl shadow-2xl"></div>
      </div>
      
      <div className="border border-black"></div>
      <div className="border border-black"></div>
    </div>
  )
}

export default App