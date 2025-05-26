// src/components/NavBar.tsx
import "./NavBar.css"; // Adjust the path if you're using a separate CSS file for NavBar
import logo from "../../assets/logo.png";   // <<— let the bundler handle it

function NavBar() {



  return (
    <nav className='navbar'>
     <div className='navbar items'>
      <img src={logo} className="logo"/>
      <div className='right items'>
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
