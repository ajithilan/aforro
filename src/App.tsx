import { useState } from "react"
import { Dashboard } from "./components/dashboard/dashboard"
import { Sidebar } from "./components/sidebar"
import { Topbar } from "./components/topbar"
import { Leaderboard } from "./components/leaderboard";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

  const handlePageChange = (page: string) => {
    setActivePage(page);
  }

  return (
    <div className="flex h-full">
      <Sidebar handlePage={handlePageChange}/>
      <div className="w-full h-full">
        <Topbar/>
        { activePage === "Dashboard" ? <Dashboard/> : <Leaderboard/> }
      </div>
    </div>
  )
}

export default App
