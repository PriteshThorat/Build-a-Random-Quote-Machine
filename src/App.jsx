import Box from './Components/Box'

function App() {
  return (
    <div
      className='flex items-center justify-center min-h-screen bg-black' >
      <div
        id="quote-box"
        className="bg-black p-6 rounded shadow-md border border-gray-300 hover:bg-gray-800 flex flex-col items-center" >
        <Box />
      </div>
    </div>
  )
}

export default App