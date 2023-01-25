import { Outlet } from "react-router-dom"
import HeaderNav from "../../components/HeaderNav"

const Layout = () => {
  return (
    <>
      <HeaderNav />
      <div className="p-4 pt-24">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
