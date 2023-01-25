import Logo from "./components/Logo";
import Search from "./components/Search";
import User from "./components/User";

const HeaderNav = () => {

    return (
        <header className="p-4 flex justify-evenly">
            <Logo />
            <Search />
            <User />
        </header>
    )
}

export default HeaderNav;