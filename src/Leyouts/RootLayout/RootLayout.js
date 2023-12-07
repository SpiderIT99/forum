import { NavLink, Outlet } from "react-router-dom";

export default function RootLeyout() {
    return (
        <div className="layout">
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to="test">Test</NavLink>
                </nav>
            </header>
            <div className="content-page">
                <Outlet />
            </div>
        </div>
    )
}