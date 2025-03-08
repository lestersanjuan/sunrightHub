import { FaSun } from "react-icons/fa"; // Example icon from react-icons
import "./NavBar.css"; // Adjust the path if needed

function NavBar() {
  return (
    <header className="navbar">
      {/* Left side: Brand name with icon */}
      <div className="navbar-brand">
        <FaSun className="navbar-icon" />{" "}
        {/* Replace with your preferred icon */}
        Sunright
      </div>

      {/* Right side: Navigation links */}
      <nav>
        <ul className="navbar-nav">
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Schedule">Schedule</a>
          </li>
          <li>
            <a href="/Inventory">Inventory</a>
          </li>
          <li>
            <a href="/DailyReport">Daily Report</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
