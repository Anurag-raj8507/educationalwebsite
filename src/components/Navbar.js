import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-left'>
      <img src='/images/mwlogot.png' alt="logo" className='logo'/>
      <h1>Maths Wallah</h1>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
