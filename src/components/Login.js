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

//   // Create a form and submit it to avoid CORS issues
//   const submitLoginForm = (data) => {
//     return new Promise((resolve, reject) => {
//       const form = document.createElement('form');
//       form.method = 'POST';
//       form.action = 'https://script.google.com/macros/s/AKfycbz0_hwJXvt2onuNrC00p2MpmELTCU6jgKBQi8q67S1lWf6xtloXdXlC1bWVbWAcJzxtxQ/exec';
//       form.target = 'loginFrame';
//       form.style.display = 'none';

//       // Create hidden iframe
//       let iframe = document.getElementById('loginFrame');
//       if (!iframe) {
//         iframe = document.createElement('iframe');
//         iframe.name = 'loginFrame';
//         iframe.id = 'loginFrame';
//         iframe.style.display = 'none';
//         document.body.appendChild(iframe);
//       }

//       // Add form fields
//       Object.keys(data).forEach(key => {
//         const input = document.createElement('input');
//         input.type = 'hidden';
//         input.name = key;
//         input.value = data[key];
//         form.appendChild(input);
//       });

//       // Handle iframe load event
//       iframe.onload = () => {
//         try {
//           // Clean up
//           document.body.removeChild(form);
//           resolve('success');
//         } catch (error) {
//           reject(error);
//         }
//       };

//       // Listen for messages from the iframe
//       const messageHandler = (event) => {
//         if (event.origin === 'https://script.google.com') {
//           window.removeEventListener('message', messageHandler);
//           resolve(event.data);
//         }
//       };
//       window.addEventListener('message', messageHandler);

//       document.body.appendChild(form);
//       form.submit();
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!email || !password) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const formData = {
//         type: "login",
//         email: email,
//         password: password,
//       };

//       const result = await submitLoginForm(formData);
      
//       // Wait a moment for the submission to process
//       setTimeout(() => {
//         // The response will be handled by the message from iframe
//         // But we'll also handle it here as backup
//         setIsLoading(false);
//       }, 2000);

//     } catch (error) {
//       console.error("Error:", error);
//       alert("Login error. Please try again.");
//       setIsLoading(false);
//     }
//   };

//   // Listen for messages from the Google Apps Script
//   useState(() => {
//     const handleMessage = (event) => {
//       if (event.origin === 'https://script.google.com') {
//         const data = event.data;
        
//         if (data === 'NOT_REGISTERED') {
//           alert('You are not registered. Please register first.');
//           navigate('/register');
//         } else if (data === 'INVALID_PASSWORD') {
//           alert('Incorrect password. Please try again.');
//         } else if (data === 'LOGIN_SUCCESS') {
//           alert('Login successful!');
//           // Clear form
//           setEmail('');
//           setPassword('');
//           navigate('/dashboard');
//         } else if (data === 'ERROR') {
//           alert('Login error. Please try again.');
//         }
        
//         setIsLoading(false);
//       }
//     };

//     window.addEventListener('message', handleMessage);
    
//     return () => {
//       window.removeEventListener('message', handleMessage);
//     };
//   }, [navigate]);

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
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 disabled={isLoading}
//                 required
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
//                 required
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
          
//           <div style={{ textAlign: 'center', marginTop: '15px' }}>
//             <p>Don't have an account? 
//               <span 
//                 onClick={() => navigate('/register')} 
//                 style={{ 
//                   color: 'blue', 
//                   cursor: 'pointer', 
//                   textDecoration: 'underline',
//                   marginLeft: '5px' 
//                 }}
//               >
//                 Register here
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login; 

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

//   // JSONP method to get response from Apps Script
//   const submitWithJSONP = (formData) => {
//     return new Promise((resolve, reject) => {
//       const callbackName = 'loginCallback_' + Date.now();
//       const script = document.createElement('script');
      
//       // Set up callback function
//       window[callbackName] = (response) => {
//         document.head.removeChild(script);
//         delete window[callbackName];
//         resolve(response);
//       };

//       // Create script URL with callback parameter
//       const params = new URLSearchParams({
//         ...formData,
//         callback: callbackName
//       });
      
//       script.src = `https://script.google.com/macros/s/AKfycbymC8F767X7bShl9xnfWaVK-Ak7AbudT8MkxhatAilTfLFt6P_WGJ5EVn1KjOGnBtUKQg/exec?${params}`;
//       script.onerror = () => {
//         document.head.removeChild(script);
//         delete window[callbackName];
//         reject(new Error('JSONP request failed'));
//       };

//       document.head.appendChild(script);
      
//       // Timeout after 15 seconds
//       setTimeout(() => {
//         if (window[callbackName]) {
//           document.head.removeChild(script);
//           delete window[callbackName];
//           reject(new Error('Request timeout'));
//         }
//       }, 15000);
//     });
//   };

//   // Alternative method using popup window
//   const submitWithPopup = (formData) => {
//     return new Promise((resolve, reject) => {
//       const form = document.createElement('form');
//       form.method = 'POST';
//       form.action = 'https://script.google.com/macros/s/AKfycbymC8F767X7bShl9xnfWaVK-Ak7AbudT8MkxhatAilTfLFt6P_WGJ5EVn1KjOGnBtUKQg/exec';
//       form.target = 'login_popup';
//       form.style.display = 'none';

//       Object.keys(formData).forEach(key => {
//         const input = document.createElement('input');
//         input.type = 'hidden';
//         input.name = key;
//         input.value = formData[key];
//         form.appendChild(input);
//       });

//       // Open popup window
//       const popup = window.open('', 'login_popup', 'width=600,height=400,scrollbars=yes,resizable=yes');
      
//       if (!popup) {
//         reject(new Error('Popup blocked. Please allow popups for this site.'));
//         return;
//       }

//       document.body.appendChild(form);
//       form.submit();
//       document.body.removeChild(form);

//       // Monitor popup for response
//       const checkPopup = setInterval(() => {
//         try {
//           if (popup.closed) {
//             clearInterval(checkPopup);
//             // Since we can't read the response directly, we'll ask user to confirm
//             const userResponse = window.prompt(
//               'Login submitted! Please check the popup window that opened.\n\n' +
//               'If you saw "LOGIN_SUCCESS" with your user data, type "success"\n' +
//               'If you saw "INVALID_CREDENTIALS", type "invalid"\n' +
//               'If you saw any error message, type "error"\n\n' +
//               'What did you see?'
//             );
            
//             if (userResponse) {
//               if (userResponse.toLowerCase().includes('success')) {
//                 resolve('LOGIN_SUCCESS:{"name":"User","email":"' + email + '"}');
//               } else if (userResponse.toLowerCase().includes('invalid')) {
//                 resolve('INVALID_CREDENTIALS');
//               } else {
//                 resolve('ERROR');
//               }
//             } else {
//               resolve('CANCELLED');
//             }
//           }
//         } catch (e) {
//           // Popup still open or cross-origin issue
//         }
//       }, 1000);

//       // Auto-close after 30 seconds
//       setTimeout(() => {
//         if (!popup.closed) {
//           popup.close();
//           clearInterval(checkPopup);
//           resolve('TIMEOUT');
//         }
//       }, 30000);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!email || !password) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     if (password.length < 6) {
//       alert("Password must be at least 6 characters.");
//       return;
//     }

//     setIsLoading(true);

//     const formData = {
//       type: "login",
//       email: email,
//       password: password,
//     };

//     try {
//       // First try JSONP method
//       try {
//         const response = await submitWithJSONP(formData);
//         handleLoginResponse(response);
//         return;
//       } catch (jsonpError) {
//         console.log('JSONP failed, trying popup method:', jsonpError);
//       }

//       // Fallback to popup method
//       const response = await submitWithPopup(formData);
//       handleLoginResponse(response);

//     } catch (error) {
//       console.error('Login error:', error);
      
//       // Final fallback - direct navigation to Apps Script
//       if (window.confirm('Unable to process login automatically. Would you like to open the login form in a new tab?')) {
//         const form = document.createElement('form');
//         form.method = 'POST';
//         form.action = 'https://script.google.com/macros/s/AKfycbymC8F767X7bShl9xnfWaVK-Ak7AbudT8MkxhatAilTfLFt6P_WGJ5EVn1KjOGnBtUKQg/exec';
//         form.target = '_blank';
//         form.style.display = 'none';

//         Object.keys(formData).forEach(key => {
//           const input = document.createElement('input');
//           input.type = 'hidden';
//           input.name = key;
//           input.value = formData[key];
//           form.appendChild(input);
//         });

//         document.body.appendChild(form);
//         form.submit();
//         document.body.removeChild(form);

//         alert('Login form opened in new tab. Please check the result and return if successful.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleLoginResponse = (response) => {
//     console.log('Login Response:', response);
    
//     if (response.startsWith('LOGIN_SUCCESS:')) {
//       // Extract user data from response
//       const userData = response.replace('LOGIN_SUCCESS:', '');
//       try {
//         const user = JSON.parse(userData);
        
//         // Store user data in localStorage
//         localStorage.setItem('userEmail', user.email);
//         localStorage.setItem('userName', user.name);
//         localStorage.setItem('userPhone', user.phone || '');
//         localStorage.setItem('userState', user.state || '');
//         localStorage.setItem('userCity', user.city || '');
//         localStorage.setItem('loginTime', new Date().getTime().toString());
        
//         alert(`Welcome back, ${user.name}!`);
        
//         // Clear form
//         setEmail('');
//         setPassword('');
        
//         // Navigate to dashboard
//         navigate("/dashboard"); // Change this to your desired route
        
//       } catch (parseError) {
//         console.error('Error parsing user data:', parseError);
//         alert("Login successful! Welcome back!");
//         localStorage.setItem('userEmail', email);
//         localStorage.setItem('loginTime', new Date().getTime().toString());
//         navigate("/dashboard");
//       }
      
//     } else if (response === 'INVALID_CREDENTIALS') {
//       alert("Invalid email or password! Please check your credentials and try again.");
//     } else if (response === 'ERROR' || response === 'TIMEOUT' || response === 'CANCELLED') {
//       alert("Login may have failed. Please check your credentials and try again.");
//     } else if (typeof response === 'string' && response.startsWith('ERROR:')) {
//       alert("Login failed: " + response);
//     } else {
//       alert("Login completed. Please verify if you were logged in successfully.");
//       // Assume success and navigate
//       localStorage.setItem('userEmail', email);
//       localStorage.setItem('loginTime', new Date().getTime().toString());
//       navigate("/dashboard");
//     }
//   };

//   const handleForgotPassword = () => {
//     if (email) {
//       alert(`Password recovery for ${email} - Please contact support or try to remember your password.`);
//     } else {
//       alert("Please enter your email first, then click 'Forgot Password' to get help.");
//     }
//   };

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
//                 placeholder="Enter Email" 
//                 value={email} 
//                 onChange={(e) => setEmail(e.target.value)}
//                 disabled={isLoading}
//                 required
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
//                 required
//                 minLength="6"
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
//               {password && password.length < 6 && (
//                 <small style={{color: 'red', display: 'block'}}>Password must be at least 6 characters</small>
//               )}
//             </div><br />

//             <button 
//               type="submit" 
//               disabled={isLoading || password.length < 6}
//               style={{
//                 opacity: (isLoading || password.length < 6) ? 0.6 : 1,
//                 cursor: (isLoading || password.length < 6) ? 'not-allowed' : 'pointer'
//               }}
//             >
//               {isLoading ? 'Logging in...' : 'Login'}
//             </button>
            
//             <div style={{ marginTop: '10px', textAlign: 'center' }}>
//               <button 
//                 type="button" 
//                 onClick={handleForgotPassword}
//                 style={{ 
//                   background: 'none', 
//                   border: 'none', 
//                   color: 'gray', 
//                   textDecoration: 'underline', 
//                   cursor: 'pointer',
//                   fontSize: '12px'
//                 }}
//                 disabled={isLoading}
//               >
//                 Forgot Password?
//               </button>
//             </div>
            
//             <div style={{ marginTop: '10px', textAlign: 'center' }}>
//               Don't have an account? 
//               <button 
//                 type="button" 
//                 onClick={() => navigate("/register")}
//                 style={{ 
//                   background: 'none', 
//                   border: 'none', 
//                   color: 'blue', 
//                   textDecoration: 'underline', 
//                   cursor: 'pointer',
//                   marginLeft: '5px'
//                 }}
//                 disabled={isLoading}
//               >
//                 Register here
//               </button>
//             </div>
//           </form>
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

  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      // Create form data
      const formData = new FormData();
      formData.append('type', 'login');
      formData.append('email', email);
      formData.append('password', password);

      const response = await fetch("https://script.google.com/macros/s/AKfycbxokyMXKzm9p6qEhlws-3WBwBb0ah31kkZPZ-0jWIpDH1pUOjKXWExndMoVrtmXriyW/exec", {
        method: "POST",
        mode: 'no-cors', // This handles CORS
        body: formData
      });

      // Since we're using no-cors, we can't read the response directly
      // The server will log the attempt and you'll need to handle success/failure differently
      // You might want to implement a callback mechanism or check status differently
      
      setTimeout(() => {
        alert("Login attempt submitted! Check your credentials and try again if login fails.");
        // You might want to redirect to dashboard on successful login
        navigate("/dashboard");
      }, 2000);

    } catch (error) {
      console.error("Error:", error);
      alert("Login error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section2">
      <h2>Login</h2>
      <div className="cards2">
        <div className="card2">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label><br />
              <input 
                type="email" 
                placeholder="Enter Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                disabled={isLoading}
              />
            </div><br />

            <div style={{ position: 'relative' }}>
              <label>Password:</label><br />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
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
              </span>
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