
import { NavLink } from "react-router-dom";

function Navbar () {
    
    return (
        <div className="bg-primary rounded-full text-white flex justify-between items-center px-5 py-3 max-w-2xl mx-auto mt-5">
            <div className="flex justify-center items-center mt-4 md:mb-0">
                <h3 className="text-xl font-bold">Sekar</h3>
            </div>
            
            <nav className="flex justify-evenly gap-4 font-bold">
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-white font-semibold underline underline-offset-4' : 'text-white hover:underline'}>Home</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-white font-semibold underline underline-offset-4' : 'text-white hover:underline'}>Projects</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'text-white font-semibold underline underline-offset-4' : 'text-white hover:underline'}>About</NavLink>
            </nav>
        </div>
    )
}

export default Navbar;