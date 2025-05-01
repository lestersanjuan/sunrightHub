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
          <li>
            <a href="/Assessment">Asssessment</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
