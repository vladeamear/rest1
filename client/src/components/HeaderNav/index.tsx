import Logo from "./components/Logo";
import Search from "./components/Search";
import User from "./components/User";

const HeaderNav = () => {

  return (
    <header className="p-4 flex justify-evenly border-b border-gray-400 fixed top-0 left-0 w-full bg-white">
      <Logo />
      <Search />
      <User />
    </header>
  )
}

export default HeaderNav;