// src/components/NavBar.tsx
import "./NavBar.css"; // Adjust the path if you're using a separate CSS file for NavBar

function NavBar() {



  return (
    <nav className = 'navbar'>
     <div className = 'navbar items'>
      <h2 className="logo"></h2>
      <div className = 'right items'>
          <a href="/">Home</a>
          <a href="/schedule">Schedule</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/daily">Daily Report</a>
      </div>
     </div>
    </nav>
  );
}

export default NavBar;
