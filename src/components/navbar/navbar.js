
import './navbar.css'; 

export default function NavBar () {
  return (
    <nav className="navbar">
    <div className="nav-brand">AR GROUPS</div>
    
      <a className="nav-item" href='/'>Home</a>
      <a className="nav-item" href='/about'>About</a>
      <a className="nav-item" href='/contact'>Contact</a>
   
  </nav>
  );
};


