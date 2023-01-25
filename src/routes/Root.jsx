import { Outlet } from "react-router-dom"

export default function Root() {
  return (
    <div className="wrapper">
        <h1>Typing Practice Game</h1>
        <Outlet />
    </div>
  )
}
