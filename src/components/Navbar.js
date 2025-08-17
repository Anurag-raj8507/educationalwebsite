// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className='nav'>
//       <div className='nav-left'>
//       <img src='/images/mwlogot.png' alt="logo" className='logo'/>
//       <h1>Maths Wallah</h1>
//       </div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/courses">Courses</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/register">Register</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
// const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const handleLogout = () => {
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//     navigate('/');
//     window.dispatchEvent(new Event("storage")); // Notify logout
//   };

//   useEffect(() => {
//     const updateLoginStatus = () => {
//       setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
//     };

//     window.addEventListener('storage', updateLoginStatus);
//     return () => window.removeEventListener('storage', updateLoginStatus);
//   }, []);
//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [location]);

//   return (
//     <nav className='nav'>
//       <div className='nav-left'>
//         <img src='/images/mwlogot.png' alt="logo" className='logo' />
//         <h1>Maths Wallah</h1>
//       </div>
//        {/* ✅ Hamburger on right */}
//       <div className="hamburger" onClick={toggleMenu}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/courses">Courses</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>

//         {isLoggedIn ? (
//           <>
//             <li><Link to="/dashboard">Dashboard</Link></li>
//             <li>
//               <button
//                 onClick={handleLogout}
//                 style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
//               >
//                 Logout
//               </button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/login">Login</Link></li>
//             {/* <li><Link to="/register">Register</Link></li> */}
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar; 

import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // ✅ added useLocation

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const navigate = useNavigate();
  const location = useLocation(); // ✅ track route changes
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
    window.dispatchEvent(new Event("storage")); // Notify logout
  };

  useEffect(() => {
    const updateLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('storage', updateLoginStatus);
    return () => window.removeEventListener('storage', updateLoginStatus);
  }, []);

  // ✅ Close menu whenever route changes (including Home "/")
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className='nav'>
      <div className='nav-left'>
        <img src='/images/mwlogot.png' alt="logo" className='logo' />
        <h1>Maths Wallah</h1>
      </div>
       {/* ✅ Hamburger on right */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
  <li>
    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
  </li>
  <li>
    <Link to="/courses" onClick={() => setIsMenuOpen(false)}>Courses</Link>
  </li>
  <li>
    <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
  </li>
  <li>
    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
  </li>

  {isLoggedIn ? (
    <>
      <li>
        <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
      </li>
      <li>
        <button
          onClick={() => {
            handleLogout();
            setIsMenuOpen(false);
          }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
        >
          Logout
        </button>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
      </li>
    </>
  )}
</ul>
    </nav>
  );
};

export default Navbar;