// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [dob, setDob] = useState('');
//     // Add these two useState hooks
// const [state, setState] = useState('');
// const [city, setCity] = useState('');
//   const [password, setPassword] = useState('');

// const navigate = useNavigate();

// State and city options (you can expand as needed)
// const stateCityMap = {
//   "Bihar": ["Patna", "Gaya", "Muzaffarpur","Bhagalpur", "Purnia", "Darbhanga","Motihari", "Sasaram", "Arrah"],
//   "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
//   "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
//   "Delhi": ["New Delhi"],
//   "Karnataka": ["Bengaluru", "Mysuru"]
// };

//   const togglePassword = () => {
//     setShowPassword(prev => !prev);
//   };

//   const handlePhoneInput = (e) => {
//     const value = e.target.value.replace(/\D/g, '');
//     if (value.length <= 10) {
//       setPhone(value);
//     }
//   };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!username || !email || !phone || !dob || !state || !city || !password) {
  //     alert("Please fill in all fields.");
  //     return;
  //   }

  //   // 1. Check if email already registered
  //   const checkUrl = `https://script.google.com/macros/s/AKfycbxrFwo9c_Q9khYhz4fpPmWxA7FNRFNElCP_pHidz9GA5jzvrEerFqV1BU7h9AyvjZDd1A/exec?type=checkEmail&email=${email}`;
    
  //   try {
  //     const res = await fetch(checkUrl);
  //     const result = await res.text();

  //     if (result === "exists") {
  //       alert("Email already registered. Please log in.");
  //       return;
  //     }
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!username || !email || !phone || !dob || !password || !state || !city) {
//     alert("Please fill in all fields.");
//     return;
//   }

//   try {
//     const response = await fetch("https://script.google.com/macros/s/AKfycbxrFwo9c_Q9khYhz4fpPmWxA7FNRFNElCP_pHidz9GA5jzvrEerFqV1BU7h9AyvjZDd1A/exec", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: new URLSearchParams({
//         type: "register",
//         name: username,
//         email:email,
//         phone,
//         dob,
//         state,
//         city,
//         password,
//       }),
//     });

//     const result = await response.text();

//     if (result === "Success") {
//       alert("Registration successful!");
//       navigate("/login");
//     } else {
//       alert("Registration failed!");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("Registration error. Please try again.");
//   }
// };

      // // 2. If not exists, proceed to register
      // const registerRes = await fetch('https://script.google.com/macros/s/AKfycbxrFwo9c_Q9khYhz4fpPmWxA7FNRFNElCP_pHidz9GA5jzvrEerFqV1BU7h9AyvjZDd1A/exec', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //   body: new URLSearchParams({
      //     type: 'register',
      //     name: username,
      //     email: email,
      //     phone: phone,
      //     dob: dob,
      //     state:state,
      //     city: city,
      //     password: password
      //   })
      // });

      // const registerText = await registerRes.text();
      // alert("Registered successfully: " + registerText);

  //     // Clear form
  //     setUsername('');
  //     setEmail('');
  //     setPhone('');
  //     setDob('');
  //     setState('');
  //     setCity('');
  //     setPassword('');

  //   // } catch (error) {
  //   //   alert("Error: " + err.message);
    
  // };
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!username || !email || !phone || !dob || !password || !state || !city) {
//     alert("Please fill in all fields.");
//     return;
//   }

//   try {
//     const response = await fetch("https://script.google.com/macros/s/AKfycbwL-1JTbddxDw9No3txUUHVfTetZUqnZiEPWV2DRTu9nFlHBJHmj_yYuymvDww4-aZbmA/exec", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: new URLSearchParams({
//         type: "register",
//         name: username,
//         email: email,
//         phone,
//         dob,
//         state,
//         city,
//         password,
//       }),
//     });

//     const result = await response.text();

//     if (result.trim() === "Success") {
//       alert("Registration successful!");
//       navigate("/login");
//     } else if (result.trim() === "Email already registered") {
//       alert("This email is already registered. Redirecting to login.");
//       navigate("/login");
//     } else {
//       alert("Registration failed: " + result);
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("Registration error. Please try again.");
//   }
// };


//   return (
//     <section className="section">
//       <h2>Register</h2>
//       <div className="cards">
//         <div className="card">
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label>Username:</label><br />
//               <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </div><br />

//             <div>
//               <label>Email:</label><br />
//               <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </div><br />

//             <div>
//               <label>Phone Number:</label><br />
//               <input type="text" maxLength="10" placeholder="Enter 10-digit Phone Number" value={phone} onChange={handlePhoneInput} />
//             </div><br />

//             <div>
//               <label>Date of Birth:</label><br />
//               <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
//             </div><br />

//            <div>
//   <label>State:</label><br />
//   <select value={state} onChange={(e) => {
//     setState(e.target.value);
//     setCity(''); // Reset city when state changes
//   }}>
//     <option value="">Select State</option>
//     {Object.keys(stateCityMap).map((s) => (
//       <option key={s} value={s}>{s}</option>
//     ))}
//   </select>
// </div><br />

// <div>
//   <label>City:</label><br />
//   <select value={city} onChange={(e) => setCity(e.target.value)} disabled={!state}>
//     <option value="">{state ? "Select City" : "Select State first"}</option>
//     {state && stateCityMap[state].map((c) => (
//       <option key={c} value={c}>{c}</option>
//     ))}
//   </select>
// </div><br />

//             <div style={{ position: 'relative' }}>
//               <label>Password:</label><br />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
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

//             <button type="submit">Register</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Register;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [dob, setDob] = useState('');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//   name: '',
//   email: '',
//   phone: '',
//   dob: '',
//   state: '',
//   city: '',
//   password: ''
// });


//   const stateCityMap = {
//     "Bihar": ["Patna", "Gaya", "Muzaffarpur"],
//     "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
//     "Maharashtra": ["Mumbai", "Pune", "Nagpur"]
//   };

//   const togglePassword = () => setShowPassword(prev => !prev);

//   const handlePhoneInput = (e) => {
//     const value = e.target.value.replace(/\D/g, '');
//     if (value.length <= 10) setPhone(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!username || !email || !phone || !dob || !state || !city || !password) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await fetch("https://script.google.com/macros/s/AKfycbykG1wD_rCbcijnAiVqOeRMCF-slECcHxerRJ0_YUfYYjIEnl83sWMGQ4Cx3LDjFbo5fg/exec", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData)({
//           name: username,
//           email,
//           phone,
//           dob,
//           state,
//           city,
//           password,
//         }),
//       });

//       const result = await response.text();
//       const trimmed = result.trim();

//       if (trimmed === "Success") {
//         alert("Registration successful!");
//         navigate("/login");
//       } else if (trimmed === "Email already registered") {
//         alert("Email already registered! Redirecting to login...");
//         navigate("/login");
//       } else {
//         alert("Registration failed: " + trimmed);
//       }

//     } catch (error) {
//       console.error("Error:", error);
//       alert("Registration error. Please try again.");
//     }
//   };

//   return (
//     <section className="section">
//       <h2>Register</h2>
//       <div className="cards">
//         <div className="card">
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label>Username:</label><br />
//               <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
//             </div><br />
//             <div>
//               <label>Email:</label><br />
//               <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
//             </div><br />
//             <div>
//               <label>Phone:</label><br />
//               <input type="text" maxLength="10" value={phone} onChange={handlePhoneInput} />
//             </div><br />
//             <div>
//               <label>Date of Birth:</label><br />
//               <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
//             </div><br />
//             <div>
//               <label>State:</label><br />
//               <select value={state} onChange={e => { setState(e.target.value); setCity(''); }}>
//                 <option value="">Select State</option>
//                 {Object.keys(stateCityMap).map(s => (
//                   <option key={s} value={s}>{s}</option>
//                 ))}
//               </select>
//             </div><br />
//             <div>
//               <label>City:</label><br />
//               <select value={city} onChange={e => setCity(e.target.value)} disabled={!state}>
//                 <option value="">{state ? "Select City" : "Select State first"}</option>
//                 {state && stateCityMap[state].map(c => (
//                   <option key={c} value={c}>{c}</option>
//                 ))}
//               </select>
//             </div><br />
//             <div style={{ position: 'relative' }}>
//               <label>Password:</label><br />
//               <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} />
//               <span onClick={togglePassword} style={{ position: 'absolute', right: 10, top: 38, cursor: 'pointer' }}>
//                 {showPassword ? "👁️" : "👁️‍🗨️"}
//               </span>
//             </div><br />
          
//             <button type="submit">Register</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;




























// import React, { useState } from 'react';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     dob: '',
//     state: '',
//     city: '',
//     password: ''
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(
//         'https://script.google.com/macros/s/AKfycbwYourScriptID/exec',
//         {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData),
//         }
//       );

//       const result = await response.json();
//       alert(result.message || 'Registered successfully!');
//     } catch (err) {
//       console.error('Submission failed:', err);
//       alert('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="register-form">
//       <h2>Student Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
//         <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//         <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone (10 digits)" required maxLength={10} pattern="\d{10}" />
//         <input name="dob" value={formData.dob} onChange={handleChange} type="date" placeholder="Date of Birth" required />
//         <input name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
//         <input name="city" value={formData.city} onChange={handleChange} placeholder="City" required />

//         <div className="password-wrapper">
//           <input
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             type={showPassword ? 'text' : 'password'}
//             placeholder="Password"
//             required
//           />
//           <span
//             className="eye-icon"
//             onClick={() => setShowPassword((prev) => !prev)}
//             style={{ cursor: 'pointer' }}
//           >
//             👁️
//           </span>
//         </div>

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [dob, setDob] = useState('');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();

//   // State and city options
//   const stateCityMap = {
//     "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Purnia", "Darbhanga", "Motihari", "Sasaram", "Arrah"],
//     "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
//     "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
//     "Delhi": ["New Delhi"],
//     "Karnataka": ["Bengaluru", "Mysuru"]
//   };

//   const togglePassword = () => {
//     setShowPassword(prev => !prev);
//   };

//   const handlePhoneInput = (e) => {
//     const value = e.target.value.replace(/\D/g, '');
//     if (value.length <= 10) {
//       setPhone(value);
//     }
//   };

//   // Function to check if email already exists
//   const checkEmailExists = async (email) => {
//     try {
//       const response = await fetch("https://script.google.com/macros/s/AKfycbz0_hwJXvt2onuNrC00p2MpmELTCU6jgKBQi8q67S1lWf6xtloXdXlC1bWVbWAcJzxtxQ/exec", {
//         method: "POST",
//         redirect: "follow",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams({
//           type: "checkEmail",
//           email: email,
//         }),
//       });

//       const result = await response.text();
//       return result === "EXISTS";
//     } catch (error) {
//       console.error("Error checking email:", error);
//       return false;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!username || !email || !phone || !dob || !password || !state || !city) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // First, check if email already exists
//       const emailExists = await checkEmailExists(email);
      
//       if (emailExists) {
//         alert("You are already registered! Please login.");
//         navigate("/login");
//         setIsLoading(false);
//         return;
//       }

//       // Proceed with registration
//       const response = await fetch("https://script.google.com/macros/s/AKfycbz0_hwJXvt2onuNrC00p2MpmELTCU6jgKBQi8q67S1lWf6xtloXdXlC1bWVbWAcJzxtxQ/exec", {
//         method: "POST",
//         redirect: "follow",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams({
//           type: "register",
//           name: username,
//           email: email,
//           phone,
//           dob,
//           state,
//           city,
//           password,
//         }),
//       });

//       const result = await response.text();
      
//       if (result === "EMAIL_EXISTS") {
//         alert("You are already registered! Please login.");
//         navigate("/login");
//         setIsLoading(false);
//         return;
//       } else if (result === "Success") {
//         alert("Registration successful!");
//       } else {
//         alert("Registration failed! Please try again.");
//         setIsLoading(false);
//         return;
//       }
      
//       // Clear form
//       setUsername('');
//       setEmail('');
//       setPhone('');
//       setDob('');
//       setState('');
//       setCity('');
//       setPassword('');
      
//       navigate("/login");

//     } catch (error) {
//       console.error("Error:", error);
//       alert("Registration error. Please try again.");
//     }
    
//     setIsLoading(false);
//   };

//   return (
//     <section id ="register" className="section">
//       <h2>Register</h2>
//       <div className="cards">
//         <div className="card">
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label>Username:</label><br />
//               <input 
//                 type="text" 
//                 placeholder="Enter Username" 
//                 value={username} 
//                 onChange={(e) => setUsername(e.target.value)}
//                 disabled={isLoading}
//               />
//             </div><br />

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

//             <div>
//               <label>Phone Number:</label><br />
//               <input 
//                 type="text" 
//                 maxLength="10" 
//                 placeholder="Enter 10-digit Phone Number" 
//                 value={phone} 
//                 onChange={handlePhoneInput}
//                 disabled={isLoading}
//               />
//             </div><br />

//             <div>
//               <label>Date of Birth:</label><br />
//               <input 
//                 type="date" 
//                 value={dob} 
//                 onChange={(e) => setDob(e.target.value)}
//                 disabled={isLoading}
//               />
//             </div><br />

//             <div>
//               <label>State:</label><br />
//               <select 
//                 value={state} 
//                 onChange={(e) => {
//                   setState(e.target.value);
//                   setCity('');
//                 }}
//                 disabled={isLoading}
//               >
//                 <option value="">Select State</option>
//                 {Object.keys(stateCityMap).map((s) => (
//                   <option key={s} value={s}>{s}</option>
//                 ))}
//               </select>
//             </div><br />

//             <div>
//               <label>City:</label><br />
//               <select 
//                 value={city} 
//                 onChange={(e) => setCity(e.target.value)} 
//                 disabled={!state || isLoading}
//               >
//                 <option value="">{state ? "Select City" : "Select State first"}</option>
//                 {state && stateCityMap[state].map((c) => (
//                   <option key={c} value={c}>{c}</option>
//                 ))}
//               </select>
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
//               {isLoading ? 'Processing...' : 'Register'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [dob, setDob] = useState('');
//   const [state, setState] = useState('');
//   const [city, setCity] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();

//   // State and city options
//   const stateCityMap = {
//     "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Purnia", "Darbhanga", "Motihari", "Sasaram", "Arrah"],
//     "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
//     "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
//     "Delhi": ["New Delhi"],
//     "Karnataka": ["Bengaluru", "Mysuru"]
//   };

//   const togglePassword = () => {
//     setShowPassword(prev => !prev);
//   };

//   const handlePhoneInput = (e) => {
//     const value = e.target.value.replace(/\D/g, '');
//     if (value.length <= 10) {
//       setPhone(value);
//     }
//   };

//   // JSONP method to get response from Apps Script
//   const submitWithJSONP = (formData) => {
//     return new Promise((resolve, reject) => {
//       const callbackName = 'registerCallback_' + Date.now();
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
//       form.target = 'registration_popup';
//       form.style.display = 'none';

//       Object.keys(formData).forEach(key => {
//         const input = document.createElement('input');
//         input.type = 'hidden';
//         input.name = key;
//         input.value = formData[key];
//         form.appendChild(input);
//       });

//       // Open popup window
//       const popup = window.open('', 'registration_popup', 'width=600,height=400,scrollbars=yes,resizable=yes');
      
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
//             const userResponse = window.confirm(
//               'Registration submitted! Did you see a "SUCCESS" message in the popup?\n\n' +
//               'Click OK if registration was successful, or Cancel if there was an error.'
//             );
            
//             if (userResponse) {
//               resolve('SUCCESS');
//             } else {
//               resolve('ERROR');
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
    
//     if (!username || !email || !phone || !dob || !password || !state || !city) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     if (phone.length !== 10) {
//       alert("Phone number must be exactly 10 digits.");
//       return;
//     }

//     if (password.length < 6) {
//       alert("Password must be at least 6 characters.");
//       return;
//     }

//     setIsLoading(true);

//     const formData = {
//       type: "register",
//       name: username,
//       email: email,
//       phone: phone,
//       dob: dob,
//       state: state,
//       city: city,
//       password: password,
//     };

//     try {
//       // First try JSONP method
//       try {
//         const response = await submitWithJSONP(formData);
//         handleRegistrationResponse(response);
//         return;
//       } catch (jsonpError) {
//         console.log('JSONP failed, trying popup method:', jsonpError);
//       }

//       // Fallback to popup method
//       const response = await submitWithPopup(formData);
//       handleRegistrationResponse(response);

//     } catch (error) {
//       console.error('Registration error:', error);
      
//       // Final fallback - direct navigation to Apps Script
//       if (window.confirm('Unable to process registration automatically. Would you like to open the registration form in a new tab?')) {
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

//         alert('Registration form opened in new tab. Please check the result and return to login if successful.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleRegistrationResponse = (response) => {
//     console.log('Registration Response:', response);
    
//     if (response === 'SUCCESS') {
//       alert("Registration successful!");
//       // Clear form
//       setUsername('');
//       setEmail('');
//       setPhone('');
//       setDob('');
//       setState('');
//       setCity('');
//       setPassword('');
//       navigate("/login");
//     } else if (response === 'EMAIL_EXISTS') {
//       alert("This email is already registered! Please login instead.");
//       navigate("/login");
//     } else if (response === 'ERROR' || response === 'TIMEOUT') {
//       alert("Registration may have failed. Please check your Google Sheet and try again if needed.");
//     } else if (typeof response === 'string' && response.startsWith('ERROR:')) {
//       alert("Registration failed: " + response);
//     } else {
//       alert("Registration completed. Please check your Google Sheet to verify the data was saved.");
//       navigate("/login");
//     }
//   };

//   return (
//     <section className="section">
//       <h2>Register</h2>
//       <div className="cards">
//         <div className="card">
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label>Username:</label><br />
//               <input 
//                 type="text" 
//                 placeholder="Enter Username" 
//                 value={username} 
//                 onChange={(e) => setUsername(e.target.value)}
//                 disabled={isLoading}
//                 required
//               />
//             </div><br />

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

//             <div>
//               <label>Phone Number:</label><br />
//               <input 
//                 type="text" 
//                 maxLength="10" 
//                 placeholder="Enter 10-digit Phone Number" 
//                 value={phone} 
//                 onChange={handlePhoneInput}
//                 disabled={isLoading}
//                 required
//               />
//               {phone && phone.length !== 10 && (
//                 <small style={{color: 'red'}}>Phone number must be 10 digits</small>
//               )}
//             </div><br />

//             <div>
//               <label>Date of Birth:</label><br />
//               <input 
//                 type="date" 
//                 value={dob} 
//                 onChange={(e) => setDob(e.target.value)}
//                 disabled={isLoading}
//                 required
//                 max={new Date().toISOString().split('T')[0]}
//               />
//             </div><br />

//             <div>
//               <label>State:</label><br />
//               <select 
//                 value={state} 
//                 onChange={(e) => {
//                   setState(e.target.value);
//                   setCity('');
//                 }}
//                 disabled={isLoading}
//                 required
//               >
//                 <option value="">Select State</option>
//                 {Object.keys(stateCityMap).map((s) => (
//                   <option key={s} value={s}>{s}</option>
//                 ))}
//               </select>
//             </div><br />

//             <div>
//               <label>City:</label><br />
//               <select 
//                 value={city} 
//                 onChange={(e) => setCity(e.target.value)} 
//                 disabled={!state || isLoading}
//                 required
//               >
//                 <option value="">{state ? "Select City" : "Select State first"}</option>
//                 {state && stateCityMap[state].map((c) => (
//                   <option key={c} value={c}>{c}</option>
//                 ))}
//               </select>
//             </div><br />

//             <div style={{ position: 'relative' }}>
//               <label>Password:</label><br />
//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Enter Password (min 6 characters)"
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
//               disabled={isLoading || phone.length !== 10 || password.length < 6}
//               style={{
//                 opacity: (isLoading || phone.length !== 10 || password.length < 6) ? 0.6 : 1,
//                 cursor: (isLoading || phone.length !== 10 || password.length < 6) ? 'not-allowed' : 'pointer'
//               }}
//             >
//               {isLoading ? 'Registering...' : 'Register'}
//             </button>
            
//             <div style={{ marginTop: '10px', textAlign: 'center' }}>
//               Already have an account? 
//               <button 
//                 type="button" 
//                 onClick={() => navigate("/login")}
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
//                 Login here
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Register;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // State and city options
  const stateCityMap = {
    "Bihar": ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Purnia", "Darbhanga", "Motihari", "Sasaram", "Arrah"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
    "Delhi": ["New Delhi"],
    "Karnataka": ["Bengaluru", "Mysuru"]
  };

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !email || !phone || !dob || !password || !state || !city) {
      alert("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      // Create form data
      const formData = new FormData();
      formData.append('type', 'register');
      formData.append('name', username);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('dob', dob);
      formData.append('state', state);
      formData.append('city', city);
      formData.append('password', password);

      const response = await fetch("https://script.google.com/macros/s/AKfycbxokyMXKzm9p6qEhlws-3WBwBb0ah31kkZPZ-0jWIpDH1pUOjKXWExndMoVrtmXriyW/exec", {
        method: "POST",
        mode: 'no-cors', // This handles CORS
        body: formData
      });

      // Since we're using no-cors, we can't read the response
      // We'll assume success and let the server handle duplicate checking
      // The server should return appropriate responses
      
      // For no-cors mode, we need to handle this differently
      // You might want to add a setTimeout to simulate response time
      setTimeout(() => {
        alert("Registration request submitted! If the email is already registered, you'll be redirected to login.");
        // You might want to redirect based on server logic or handle it differently
        navigate("/login");
      }, 2000);

    } catch (error) {
      console.error("Error:", error);
      alert("Registration error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section2">
      <h2>Register</h2>
      <div className="cards2">
        <div className="card2">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username:</label><br />
              <input 
                type="text" 
                placeholder="Enter Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                disabled={isLoading}
              />
            </div><br />

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

            <div>
              <label>Phone Number:</label><br />
              <input 
                type="text" 
                maxLength="10" 
                placeholder="Enter 10-digit Phone Number" 
                value={phone} 
                onChange={handlePhoneInput} 
                disabled={isLoading}
              />
            </div><br />

            <div>
              <label>Date of Birth:</label><br />
              <input 
                type="date" 
                value={dob} 
                onChange={(e) => setDob(e.target.value)} 
                disabled={isLoading}
              />
            </div><br />

            <div>
              <label>State:</label><br />
              <select 
                value={state} 
                onChange={(e) => {
                  setState(e.target.value);
                  setCity('');
                }} 
                disabled={isLoading}
              >
                <option value="">Select State</option>
                {Object.keys(stateCityMap).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div><br />

            <div>
              <label>City:</label><br />
              <select 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                disabled={!state || isLoading}
              >
                <option value="">{state ? "Select City" : "Select State first"}</option>
                {state && stateCityMap[state].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
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
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <p>Already have an account? 
              <button 
                type="button" 
                onClick={() => navigate('/login')}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'blue', 
                  textDecoration: 'underline', 
                  cursor: 'pointer' 
                }}
              >
                Login here
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;