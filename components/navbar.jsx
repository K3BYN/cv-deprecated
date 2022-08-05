import Link from "next/link"

const Navbar = (props) => {
    return (
        <label>
            <input type="checkbox" />
            <span className="menu">
                <span className="hamburger" />
            </span>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </label>
    );
}

export default Navbar;