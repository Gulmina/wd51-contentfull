import { Link, NavLink } from "react-router-dom";

const Header = () => {
    
    return (
        <header className="bg-gradient-to-br from-sky-800 to-indigo-800 text-white py-4">
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-8">
                <Link to={"/"}><h1 className="text-3xl font-bold">Movie Buff</h1></Link>
                <nav>
                    <ul className="flex justify-center gap-4 text-xl">
                        <li><NavLink to="/favorites">Favorites</NavLink></li>
                        <li><NavLink to="/catalog">Catalog</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;