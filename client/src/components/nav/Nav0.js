import './Nav0.css'



function Nav0() {

    return (
        <nav className="nav0">

        <div className="logo">UTIL-WEBAPP</div>

        <ul className="nav-links">

        <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

        <div className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li className="services">
            <a href="/">Services</a>

            <ul className="dropdown">
                <li><a href="/">Dropdown 1 </a></li>
                <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 3</a></li>
                <li><a href="/">Dropdown 4</a></li>
            </ul>
            </li>

            <li><a href="/">Pricing</a></li>
            <li><a href="/">Contact</a></li>

        </div>
        </ul>
    </nav>
    );

}

export default Nav0;
