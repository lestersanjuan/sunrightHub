import "./NavBar.css"; // Ensure the path is correct

function NavBar() {
  return (
    <header className="navbar">
      {/* Left: Brand with Image Placeholder */}
      <div className="navbar-brand">
        <img
          src="../assets/react.svg"
          alt="Brand Icon"
          className="navbar-icon"
        />
        Sunright
      </div>

      {/* Right: Navigation Links */}
      <nav>
        <ul className="navbar-items">
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
