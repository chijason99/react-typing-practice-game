import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Routes path='/' element={Layout}>
        <Route index element={Home} />
      </Routes>
    </div>
  )
}

export default App
