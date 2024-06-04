import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const navLinkStyles = ({ isActive }) => {
        return `px-2 py-1 border-b-2 border-transparent transition-colors ${isActive ? "border-rose-200 text-rose-200" : ""}`
    };
    
    return (
        <header className="mb-4 bg-gradient-to-br from-sky-800 to-indigo-800 text-white py-4">
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-8">
                <Link to={"/"}><h1 className="text-3xl font-bold">Movie Buff</h1></Link>
                <nav>
                    <ul className="flex justify-center gap-4 text-xl">
                        <li><NavLink className={navLinkStyles} to="/favorites">Favorites</NavLink></li>
                        <li><NavLink className={navLinkStyles} to="/search">Search</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;