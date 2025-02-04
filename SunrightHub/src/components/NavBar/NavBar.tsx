// src/components/NavBar.tsx
import "./NavBar.css"; // Adjust the path if you're using a separate CSS file for NavBar

function NavBar() {
  return (
    <header className="navbar">
      {/* Left side: Brand name */}
      <div className="navbar-brand">Sunright</div>

      {/* Right side: Navigation links */}
      <nav>
        <ul className="navbar-nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Schedule</a>
          </li>
          <li>
            <a href="#">Inventory</a>
          </li>
          <li>
            <a href="#">Daily Report</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
