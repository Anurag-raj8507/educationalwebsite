// const Login = () => {
//   return (
//     <section className="section">
//       <h2>Login</h2>
//       <div className="cards">
//         <div className="card">
//           <form>
//             <div>
//               <label>Username:</label><br />
//               <input type="text" placeholder="Enter Username" />
//             </div>
//             <br />
//             <div>
//               <label>Password:</label><br />
//               <input type="password" placeholder="Enter Password" />
//             </div>
//             <br />
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setemail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const scriptURL = 'https://script.google.com/macros/s/AKfycbxrFwo9c_Q9khYhz4fpPmWxA7FNRFNElCP_pHidz9GA5jzvrEerFqV1BU7h9AyvjZDd1A/exec';

//     fetch(scriptURL, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//       body: new URLSearchParams({
//         type: 'login',
//         email: email,
//         password: password,
//       }),
//     })
//       // .then((res) => res.text())
//       // .then((data) => {
//       //   if(data === 'Login successful') {
//       //     alert('Login successful!');
//       //     navigate('/dashboard'); // Redirect to dashboard
//       //   }
//       // })
//         if (data === 'NOT_REGISTERED') {
//           alert('You are not registered. Please sign up first.');
//         } else if (data === 'INVALID_PASSWORD') {
//           alert('Incorrect password. Please try again.');
//         } else if (data === 'LOGIN_SUCCESS') {
//           alert('Login successful!');
//           navigate('/dashboard'); // 🔁 Redirect to dashboard
//         } else {
//           alert('Unexpected response: ' + data);
//         }
//     //   })
//     // .catch((err) => alert('Error: ' + err));
// };

//   return (
//     <section className="section">
//       <h2>Login</h2>
//       <div className="cards">
//         <div className="card">
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label>Email:</label><br />
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setemail(e.target.value)}
//               />
//             </div>
//             <br />
//             <div>
//               <label>Password:</label><br />
//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <br />
//             <button type="submit">Login</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login; 


// finally working code h iske  niche

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();

//   const togglePassword = () => {
//     setShowPassword(prev => !prev);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!email || !password) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // Create form data
//       const formData = new FormData();
//       formData.append('type', 'login');
//       formData.append('email', email);
//       formData.append('password', password);

//       const response = await fetch("https://script.google.com/macros/s/AKfycbxokyMXKzm9p6qEhlws-3WBwBb0ah31kkZPZ-0jWIpDH1pUOjKXWExndMoVrtmXriyW/exec", {
//         method: "POST",
//         mode: 'no-cors', // This handles CORS
//         body: formData
//       });
//      const message = await response.text();
//       // Since we're using no-cors, we can't read the response directly
//       // The server will log the attempt and you'll need to handle success/failure differently
//       // You might want to implement a callback mechanism or check status differently
//       if (message === "Login successful"){ 
//          alert("Login Successful!  Redirecting to dashboard ...");
//       setTimeout(() => {
//         // alert("Login attempt submitted! Check your password and try again if login fails.");
//         // You might want to redirect to dashboard on successful login
//         navigate("/dashboard");
//       }, 2000);
//     }
//         else if (message === "Invalid password"){
//           alert("wrong Password ! Please try again");
//         }
//         else{
//           alert("Login failed:" + message)
//         }

//     } catch (error) {
//       console.error("Error:", error);
//       alert("Login error. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className="section2">
//       <h2>Login</h2>
//       <div className="cards2">
//         <div className="card2">
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label>Email:</label><br />
//               <input 
//                 type="email" 
//                 placeholder="Enter Email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)} 
//                 disabled={isLoading}
//               />
//             </div><br />

//             <div style={{ position: 'relative' }}>
//               <label>Password:</label><br />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 disabled={isLoading}
//               />
//               <span
//                 onClick={togglePassword}
//                 style={{
//                   position: 'absolute',
//                   right: 10,
//                   top: 38,
//                   cursor: 'pointer',
//                   userSelect: 'none'
//                 }}
//               >
//                 {showPassword ? '👁️' : '👁️‍🗨️'}
//               </span>
//             </div><br />

//             <button type="submit" disabled={isLoading}>
//               {isLoading ? 'Logging in...' : 'Login'}
//             </button>
//           </form>

//           <div style={{ marginTop: '20px', textAlign: 'center' }}>
//             <p>Don't have an account? 
//               <button 
//                 type="button" 
//                 onClick={() => navigate('/register')}
//                 style={{ 
//                   background: 'none', 
//                   border: 'none', 
//                   color: 'blue', 
//                   textDecoration: 'underline', 
//                   cursor: 'pointer' 
//                 }}
//               >
//                 Register here
//               </button>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login; 

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecial = /[@&*]/.test(password);
    const isLongEnough = password.length >= 8;
    
    return hasLetter && hasNumber && hasSpecial && isLongEnough;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

   const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    
    if (value && !validatePassword(value)) {
      setPasswordError('Password must be 8+ characters with letters, numbers, and special characters (@, &, *)');
    } else {
      setPasswordError('');
    }
  };

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

   // Validate password
    if (!validatePassword(password)) {
      alert("Password must be at least 8 characters long and contain letters, numbers, and special characters (@, &, *).");
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwW9724x20VwFB1qHBBg362B5jjZn7hNW4ZbZmIE3kZrmYJY29i6ZI-R2P0X613l_Z8/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          type: "login",
          email: email,
          password: password,
        }),
      });

      const result = await response.text();
      
      if (result === "Login Success") {
        alert("Login successful! Navigate to dashboard");
        localStorage.setItem('isLoggedIn', 'true');
        window.dispatchEvent(new Event("storage"));
        navigate("/dashboard"); // Uncomment this when you have a dashboard
      } else if (result.includes("User not found")) {
        alert("User not found. Please register first.");
        navigate("/register");
      } else if (result.includes("Invalid password")) {
        alert("Invalid password. Please try again.");
      } else {
        alert("Login failed: " + result);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Login error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section">
      <h2>Login</h2>
      <div className="cards">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label><br />
              <input 
                type="email" 
                placeholder="Enter Email" 
                value={email} 
                onChange={handleEmailChange} 
                disabled={isLoading}
                style={{ borderColor: passwordError ? 'red' : '' }}
              />
              {emailError && <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{emailError}</div>}
            </div><br />

            <div style={{ position: 'relative' }}>
              <label>Password:</label><br />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password (8+ chars, letters, numbers, @&*)"
                value={password}
                // onChange={(e) => setPassword(e.target.value)}
                onChange={handlePasswordChange}
                disabled={isLoading}
                style={{ borderColor: passwordError ? 'red' : '' }}
              />
              <span
                onClick={togglePassword}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 38,
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span> {passwordError && <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{passwordError}</div>}
            </div><br />

            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <p>Don't have an account? 
              <button 
                type="button" 
                onClick={() => navigate('/register')}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'blue', 
                  textDecoration: 'underline', 
                  cursor: 'pointer' 
                }}
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;