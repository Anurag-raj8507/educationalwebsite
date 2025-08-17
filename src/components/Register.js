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


// finally working code h iske niche wala

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!username || !email || !phone || !dob || !password || !state || !city) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // Create form data
//       const formData = new FormData();
//       formData.append('type', 'register');
//       formData.append('name', username);
//       formData.append('email', email);
//       formData.append('phone', phone);
//       formData.append('dob', dob);
//       formData.append('state', state);
//       formData.append('city', city);
//       formData.append('password', password);

//       const response = await fetch("https://script.google.com/macros/s/AKfycbxokyMXKzm9p6qEhlws-3WBwBb0ah31kkZPZ-0jWIpDH1pUOjKXWExndMoVrtmXriyW/exec", {
//         method: "POST",
//         mode: 'no-cors', // This handles CORS
//         body: formData
//       });

//       // Since we're using no-cors, we can't read the response
//       // We'll assume success and let the server handle duplicate checking
//       // The server should return appropriate responses
      
//       // For no-cors mode, we need to handle this differently
//       // You might want to add a setTimeout to simulate response time
//       setTimeout(() => {
//         alert("Registration request submitted! If the email is already registered, you'll be redirected to login.");
//         // You might want to redirect based on server logic or handle it differently
//         navigate("/login");
//       }, 2000);

//     } catch (error) {
//       console.error("Error:", error);
//       alert("Registration error. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className="section2">
//       <h2>Register</h2>
//       <div className="cards2">
//         <div className="card2">
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
//               {isLoading ? 'Registering...' : 'Register'}
//             </button>
//           </form>

//           <div style={{ marginTop: '20px', textAlign: 'center' }}>
//             <p>Already have an account? 
//               <button 
//                 type="button" 
//                 onClick={() => navigate('/login')}
//                 style={{ 
//                   background: 'none', 
//                   border: 'none', 
//                   color: 'blue', 
//                   textDecoration: 'underline', 
//                   cursor: 'pointer' 
//                 }}
//               >
//                 Login here
//               </button>
//             </p>
//           </div>
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
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  // State and city options
  const stateCityMap = {
  "Andaman and Nicobar Islands": ["Port Blair"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Kalyan-Dombivali", "Vasai-Virar", "Solapur", "Mira-Bhayandar", "Bhiwandi", "Amravati", "Nanded-Waghala", "Sangli", "Malegaon", "Akola", "Latur", "Dhule", "Ahmednagar", "Ichalkaranji", "Parbhani", "Panvel", "Yavatmal", "Achalpur", "Osmanabad", "Nandurbar", "Satara", "Wardha", "Udgir", "Aurangabad", "Amalner", "Akot", "Pandharpur", "Shrirampur", "Parli", "Washim", "Ambejogai", "Manmad", "Ratnagiri", "Uran Islampur", "Pusad", "Sangamner", "Shirpur-Warwade", "Malkapur", "Wani", "Lonavla", "Talegaon Dabhade", "Anjangaon", "Umred", "Palghar", "Shegaon", "Ozar", "Phaltan", "Yevla", "Shahade", "Vita", "Umarkhed", "Warora", "Pachora", "Tumsar", "Manjlegaon", "Sillod", "Arvi", "Nandura", "Vaijapur", "Wadgaon Road", "Sailu", "Murtijapur", "Tasgaon", "Mehkar", "Yawal", "Pulgaon", "Nilanga", "Wai", "Umarga", "Paithan", "Rahuri", "Nawapur", "Tuljapur", "Morshi", "Purna", "Satana", "Pathri", "Sinnar", "Uchgaon", "Uran", "Pen", "Karjat", "Manwath", "Partur", "Sangole", "Mangrulpir", "Risod", "Shirur", "Savner", "Sasvad", "Pandharkaoda", "Talode", "Shrigonda", "Shirdi", "Raver", "Mukhed", "Rajura", "Vadgaon Kasba", "Tirora", "Mahad", "Lonar", "Sawantwadi", "Pathardi", "Pauni", "Ramtek", "Mul", "Soyagaon", "Mangalvedhe", "Narkhed", "Shendurjana", "Patur", "Mhaswad", "Loha", "Nandgaon", "Warud"],
"Delhi": ["Delhi", "New Delhi"],
"Karnataka": ["Bengaluru", "Hubli-Dharwad", "Belagavi", "Mangaluru", "Davanagere", "Ballari", "Tumkur", "Shivamogga", "Raayachuru", "Robertson Pet", "Kolar", "Mandya", "Udupi", "Chikkamagaluru", "Karwar", "Ranebennuru", "Ranibennur", "Ramanagaram", "Gokak", "Yadgir", "Rabkavi Banhatti", "Shahabad", "Sirsi", "Sindhnur", "Tiptur", "Arsikere", "Nanjangud", "Sagara", "Sira", "Puttur", "Athni", "Mulbagal", "Surapura", "Siruguppa", "Mudhol", "Sidlaghatta", "Shahpur", "Saundatti-Yellamma", "Wadi", "Manvi", "Nelamangala", "Lakshmeshwar", "Ramdurg", "Nargund", "Tarikere", "Malavalli", "Savanur", "Lingsugur", "Vijayapura", "Sankeshwara", "Madikeri", "Talikota", "Sedam", "Shikaripur", "Mahalingapura", "Mudalagi", "Muddebihal", "Pavagada", "Malur", "Sindhagi", "Sanduru", "Afzalpur", "Maddur", "Madhugiri", "Tekkalakote", "Terdal", "Mudabidri", "Magadi", "Navalgund", "Shiggaon", "Shrirangapattana", "Sindagi", "Sakaleshapura", "Srinivaspur", "Ron", "Mundargi", "Sadalagi", "Piriyapatna", "Adyar"],
"Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Nadiad", "Porbandar", "Anand", "Morvi", "Mahesana", "Bharuch", "Vapi", "Navsari", "Veraval", "Bhuj", "Godhra", "Palanpur", "Valsad", "Patan", "Deesa", "Amreli", "Anjar", "Dhoraji", "Khambhat", "Mahuva", "Keshod", "Wadhwan", "Ankleshwar", "Savarkundla", "Kadi", "Visnagar", "Upleta", "Una", "Sidhpur", "Unjha", "Mangrol", "Viramgam", "Modasa", "Palitana", "Petlad", "Kapadvanj", "Sihor", "Wankaner", "Limbdi", "Mandvi", "Thangadh", "Vyara", "Padra", "Lunawada", "Rajpipla", "Vapi", "Umreth", "Sanand", "Rajula", "Radhanpur", "Mahemdabad", "Ranavav", "Tharad", "Mansa", "Umbergaon", "Talaja", "Vadnagar", "Manavadar", "Salaya", "Vijapur", "Pardi", "Rapar", "Songadh", "Lathi", "Adalaj", "Chhapra"],
"Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam", "Khammam", "Mahbubnagar", "Mancherial", "Adilabad", "Suryapet", "Jagtial", "Miryalaguda", "Nirmal", "Kamareddy", "Kothagudem", "Bodhan", "Palwancha", "Mandamarri", "Koratla", "Sircilla", "Tandur", "Siddipet", "Wanaparthy", "Kagaznagar", "Gadwal", "Sangareddy", "Bellampalle", "Bhongir", "Vikarabad", "Jangaon", "Bhadrachalam", "Bhainsa", "Farooqnagar", "Medak", "Narayanpet", "Sadasivpet", "Yellandu", "Manuguru", "Kyathampalle", "Nagarkurnool"],
"Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Ranipet", "Nagercoil", "Thanjavur", "Vellore", "Kancheepuram", "Erode", "Tiruvannamalai", "Pollachi", "Rajapalayam", "Sivakasi", "Pudukkottai", "Neyveli (TS)", "Nagapattinam", "Viluppuram", "Tiruchengode", "Vaniyambadi", "Theni Allinagaram", "Udhagamandalam", "Aruppukkottai", "Paramakudi", "Arakkonam", "Virudhachalam", "Srivilliputhur", "Tindivanam", "Virudhunagar", "Karur", "Valparai", "Sankarankovil", "Tenkasi", "Palani", "Pattukkottai", "Tirupathur", "Ramanathapuram", "Udumalaipettai", "Gobichettipalayam", "Thiruvarur", "Thiruvallur", "Panruti", "Namakkal", "Thirumangalam", "Vikramasingapuram", "Nellikuppam", "Rasipuram", "Tiruttani", "Nandivaram-Guduvancheri", "Periyakulam", "Pernampattu", "Vellakoil", "Sivaganga", "Vadalur", "Rameshwaram", "Tiruvethipuram", "Perambalur", "Usilampatti", "Vedaranyam", "Sathyamangalam", "Puliyankudi", "Nanjikottai", "Thuraiyur", "Sirkali", "Tiruchendur", "Periyasemur", "Sattur", "Vandavasi", "Tharamangalam", "Tirukkoyilur", "Oddanchatram", "Palladam", "Vadakkuvalliyur", "Tirukalukundram", "Uthamapalayam", "Surandai", "Sankari", "Shenkottai", "Vadipatti", "Sholingur", "Tirupathur", "Manachanallur", "Viswanatham", "Polur", "Panagudi", "Uthiramerur", "Thiruthuraipoondi", "Pallapatti", "Ponneri", "Lalgudi", "Natham", "Unnamalaikadai", "P.N.Patti", "Tharangambadi", "Tittakudi", "Pacode", "O' Valley", "Suriyampalayam", "Sholavandan", "Thammampatti", "Namagiripettai", "Peravurani", "Parangipettai", "Pudupattinam", "Pallikonda", "Sivagiri", "Punjaipugalur", "Padmanabhapuram", "Thirupuvanam"],
"West Bengal": ["Kolkata", "Siliguri", "Asansol", "Raghunathganj", "Kharagpur", "Naihati", "English Bazar", "Baharampur", "Hugli-Chinsurah", "Raiganj", "Jalpaiguri", "Santipur", "Balurghat", "Medinipur", "Habra", "Ranaghat", "Bankura", "Nabadwip", "Darjiling", "Purulia", "Arambagh", "Tamluk", "AlipurdUrban Agglomerationr", "Suri", "Jhargram", "Gangarampur", "Rampurhat", "Kalimpong", "Sainthia", "Taki", "Murshidabad", "Memari", "Paschim Punropara", "Tarakeswar", "Sonamukhi", "PandUrban Agglomeration", "Mainaguri", "Malda", "Panchla", "Raghunathpur", "Mathabhanga", "Monoharpur", "Srirampore", "Adra"],
"Rajasthan": ["Jaipur", "Jodhpur", "Bikaner", "Udaipur", "Ajmer", "Bhilwara", "Alwar", "Bharatpur", "Pali", "Barmer", "Sikar", "Tonk", "Sadulpur", "Sawai Madhopur", "Nagaur", "Makrana", "Sujangarh", "Sardarshahar", "Ladnu", "Ratangarh", "Nokha", "Nimbahera", "Suratgarh", "Rajsamand", "Lachhmangarh", "Rajgarh (Churu)", "Nasirabad", "Nohar", "Phalodi", "Nathdwara", "Pilani", "Merta City", "Sojat", "Neem-Ka-Thana", "Sirohi", "Pratapgarh", "Rawatbhata", "Sangaria", "Lalsot", "Pilibanga", "Pipar City", "Taranagar", "Vijainagar, Ajmer", "Sumerpur", "Sagwara", "Ramganj Mandi", "Lakheri", "Udaipurwati", "Losal", "Sri Madhopur", "Ramngarh", "Rawatsar", "Rajakhera", "Shahpura", "Shahpura", "Raisinghnagar", "Malpura", "Nadbai", "Sanchore", "Nagar", "Rajgarh (Alwar)", "Sheoganj", "Sadri", "Todaraisingh", "Todabhim", "Reengus", "Rajaldesar", "Sadulshahar", "Sambhar", "Prantij", "Mount Abu", "Mangrol", "Phulera", "Mandawa", "Pindwara", "Mandalgarh", "Takhatgarh"],
"Uttar Pradesh": ["Lucknow", "Kanpur", "Firozabad", "Agra", "Meerut", "Varanasi", "Allahabad", "Amroha", "Moradabad", "Aligarh", "Saharanpur", "Noida", "Loni", "Jhansi", "Shahjahanpur", "Rampur", "Modinagar", "Hapur", "Etawah", "Sambhal", "Orai", "Bahraich", "Unnao", "Rae Bareli", "Lakhimpur", "Sitapur", "Lalitpur", "Pilibhit", "Chandausi", "Hardoi", "Azamgarh", "Khair", "Sultanpur", "Tanda", "Nagina", "Shamli", "Najibabad", "Shikohabad", "Sikandrabad", "Shahabad, Hardoi", "Pilkhuwa", "Renukoot", "Vrindavan", "Ujhani", "Laharpur", "Tilhar", "Sahaswan", "Rath", "Sherkot", "Kalpi", "Tundla", "Sandila", "Nanpara", "Sardhana", "Nehtaur", "Seohara", "Padrauna", "Mathura", "Thakurdwara", "Nawabganj", "Siana", "Noorpur", "Sikandra Rao", "Puranpur", "Rudauli", "Thana Bhawan", "Palia Kalan", "Zaidpur", "Nautanwa", "Zamania", "Shikarpur, Bulandshahr", "Naugawan Sadat", "Fatehpur Sikri", "Shahabad, Rampur", "Robertsganj", "Utraula", "Sadabad", "Rasra", "Lar", "Lal Gopalganj Nindaura", "Sirsaganj", "Pihani", "Shamsabad, Agra", "Rudrapur", "Soron", "SUrban Agglomerationr", "Samdhan", "Sahjanwa", "Rampur Maniharan", "Sumerpur", "Shahganj", "Tulsipur", "Tirwaganj", "PurqUrban Agglomerationzi", "Shamsabad, Farrukhabad", "Warhapur", "Powayan", "Sandi", "Achhnera", "Naraura", "Nakur", "Sahaspur", "Safipur", "Reoti", "Sikanderpur", "Saidpur", "Sirsi", "Purwa", "Parasi", "Lalganj", "Phulpur", "Shishgarh", "Sahawar", "Samthar", "Pukhrayan", "Obra", "Niwai"],
"Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Arrah", "Begusarai", "Chhapra", "Katihar", "Munger", "Purnia", "Saharsa", "Sasaram", "Hajipur", "Dehri-on-Sone", "Bettiah", "Motihari", "Bagaha", "Siwan", "Kishanganj", "Jamalpur", "Buxar", "Jehanabad", "Aurangabad", "Lakhisarai", "Nawada", "Jamui", "Sitamarhi", "Araria", "Gopalganj", "Madhubani", "Masaurhi", "Samastipur", "Mokameh", "Supaul", "Dumraon", "Arwal", "Forbesganj", "BhabUrban Agglomeration", "Narkatiaganj", "Naugachhia", "Madhepura", "Sheikhpura", "Sultanganj", "Raxaul Bazar", "Ramnagar", "Mahnar Bazar", "Warisaliganj", "Revelganj", "Rajgir", "Sonepur", "Sherghati", "Sugauli", "Makhdumpur", "Maner", "Rosera", "Nokha", "Piro", "Rafiganj", "Marhaura", "Mirganj", "Lalganj", "Murliganj", "Motipur", "Manihari", "Sheohar", "Maharajganj", "Silao", "Barh", "Asarganj"],
"Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Ratlam", "Satna", "Murwara (Katni)", "Morena", "Singrauli", "Rewa", "Vidisha", "Ganjbasoda", "Shivpuri", "Mandsaur", "Neemuch", "Nagda", "Itarsi", "Sarni", "Sehore", "Mhow Cantonment", "Seoni", "Balaghat", "Ashok Nagar", "Tikamgarh", "Shahdol", "Pithampur", "Alirajpur", "Mandla", "Sheopur", "Shajapur", "Panna", "Raghogarh-Vijaypur", "Sendhwa", "Sidhi", "Pipariya", "Shujalpur", "Sironj", "Pandhurna", "Nowgong", "Mandideep", "Sihora", "Raisen", "Lahar", "Maihar", "Sanawad", "Sabalgarh", "Umaria", "Porsa", "Narsinghgarh", "Malaj Khand", "Sarangpur", "Mundi", "Nepanagar", "Pasan", "Mahidpur", "Seoni-Malwa", "Rehli", "Manawar", "Rahatgarh", "Panagar", "Wara Seoni", "Tarana", "Sausar", "Rajgarh", "Niwari", "Mauganj", "Manasa", "Nainpur", "Prithvipur", "Sohagpur", "Nowrozabad (Khodargama)", "Shamgarh", "Maharajpur", "Multai", "Pali", "Pachore", "Rau", "Mhowgaon", "Vijaypur", "Narsinghgarh"],
"Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Kakinada", "Tirupati", "Anantapur", "Kadapa", "Vizianagaram", "Eluru", "Ongole", "Nandyal", "Machilipatnam", "Adoni", "Tenali", "Chittoor", "Hindupur", "Proddatur", "Bhimavaram", "Madanapalle", "Guntakal", "Dharmavaram", "Gudivada", "Srikakulam", "Narasaraopet", "Rajampet", "Tadpatri", "Tadepalligudem", "Chilakaluripet", "Yemmiganur", "Kadiri", "Chirala", "Anakapalle", "Kavali", "Palacole", "Sullurpeta", "Tanuku", "Rayachoti", "Srikalahasti", "Bapatla", "Naidupet", "Nagari", "Gudur", "Vinukonda", "Narasapuram", "Nuzvid", "Markapur", "Ponnur", "Kandukur", "Bobbili", "Rayadurg", "Samalkot", "Jaggaiahpet", "Tuni", "Amalapuram", "Bheemunipatnam", "Venkatagiri", "Sattenapalle", "Pithapuram", "Palasa Kasibugga", "Parvathipuram", "Macherla", "Gooty", "Salur", "Mandapeta", "Jammalamadugu", "Peddapuram", "Punganur", "Nidadavole", "Repalle", "Ramachandrapuram", "Kovvur", "Tiruvuru", "Uravakonda", "Narsipatnam", "Yerraguntla", "Pedana", "Puttur", "Renigunta", "Rajam", "Srisailam Project (Right Flank Colony) Township"],
"Punjab": ["Ludhiana", "Patiala", "Amritsar", "Jalandhar", "Bathinda", "Pathankot", "Hoshiarpur", "Batala", "Moga", "Malerkotla", "Khanna", "Mohali", "Barnala", "Firozpur", "Phagwara", "Kapurthala", "Zirakpur", "Kot Kapura", "Faridkot", "Muktsar", "Rajpura", "Sangrur", "Fazilka", "Gurdaspur", "Kharar", "Gobindgarh", "Mansa", "Malout", "Nabha", "Tarn Taran", "Jagraon", "Sunam", "Dhuri", "Firozpur Cantt.", "Sirhind Fatehgarh Sahib", "Rupnagar", "Jalandhar Cantt.", "Samana", "Nawanshahr", "Rampura Phul", "Nangal", "Nakodar", "Zira", "Patti", "Raikot", "Longowal", "Urmar Tanda", "Morinda, India", "Phillaur", "Pattran", "Qadian", "Sujanpur", "Mukerian", "Talwara"],
"Haryana": ["Faridabad", "Gurgaon", "Hisar", "Rohtak", "Panipat", "Karnal", "Sonipat", "Yamunanagar", "Panchkula", "Bhiwani", "Bahadurgarh", "Jind", "Sirsa", "Thanesar", "Kaithal", "Palwal", "Rewari", "Hansi", "Narnaul", "Fatehabad", "Gohana", "Tohana", "Narwana", "Mandi Dabwali", "Charkhi Dadri", "Shahbad", "Pehowa", "Samalkha", "Pinjore", "Ladwa", "Sohna", "Safidon", "Taraori", "Mahendragarh", "Ratia", "Rania", "Sarsod"],
"Jammu and Kashmir": ["Srinagar", "Jammu", "Baramula", "Anantnag", "Sopore", "KathUrban Agglomeration", "Rajauri", "Punch", "Udhampur"],
"Jharkhand": ["Dhanbad", "Ranchi", "Jamshedpur", "Bokaro Steel City", "Deoghar", "Phusro", "Adityapur", "Hazaribag", "Giridih", "Ramgarh", "Jhumri Tilaiya", "Saunda", "Sahibganj", "Medininagar (Daltonganj)", "Chaibasa", "Chatra", "Gumia", "Dumka", "Madhupur", "Chirkunda", "Pakaur", "Simdega", "Musabani", "Mihijam", "Patratu", "Lohardaga", "Tenu dam-cum-Kathhara"],
"Chhattisgarh": ["Raipur", "Bhilai Nagar", "Korba", "Bilaspur", "Durg", "Rajnandgaon", "Jagdalpur", "Raigarh", "Ambikapur", "Mahasamund", "Dhamtari", "Chirmiri", "Bhatapara", "Dalli-Rajhara", "Naila Janjgir", "Tilda Newra", "Mungeli", "Manendragarh", "Sakti"],
"Assam": ["Guwahati", "Silchar", "Dibrugarh", "Nagaon", "Tinsukia", "Jorhat", "Bongaigaon City", "Dhubri", "Diphu", "North Lakhimpur", "Tezpur", "Karimganj", "Sibsagar", "Goalpara", "Barpeta", "Lanka", "Lumding", "Mankachar", "Nalbari", "Rangia", "Margherita", "Mangaldoi", "Silapathar", "Mariani", "Marigaon"],
"Chandigarh": ["Chandigarh"],
"Odisha": ["Bhubaneswar", "Cuttack", "Raurkela", "Brahmapur", "Sambalpur", "Puri", "Baleshwar Town", "Baripada Town", "Bhadrak", "Balangir", "Jharsuguda", "Bargarh", "Paradip", "Bhawanipatna", "Dhenkanal", "Barbil", "Kendujhar", "Sunabeda", "Rayagada", "Jatani", "Byasanagar", "Kendrapara", "Rajagangapur", "Parlakhemundi", "Talcher", "Sundargarh", "Phulabani", "Pattamundai", "Titlagarh", "Nabarangapur", "Soro", "Malkangiri", "Rairangpur", "Tarbha"],
"Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Palakkad", "Alappuzha", "Malappuram", "Ponnani", "Vatakara", "Kanhangad", "Taliparamba", "Koyilandy", "Neyyattinkara", "Kayamkulam", "Nedumangad", "Kannur", "Tirur", "Kottayam", "Kasaragod", "Kunnamkulam", "Ottappalam", "Thiruvalla", "Thodupuzha", "Chalakudy", "Changanassery", "Punalur", "Nilambur", "Cherthala", "Perinthalmanna", "Mattannur", "Shoranur", "Varkala", "Paravoor", "Pathanamthitta", "Peringathur", "Attingal", "Kodungallur", "Pappinisseri", "Chittur-Thathamangalam", "Muvattupuzha", "Adoor", "Mavelikkara", "Mavoor", "Perumbavoor", "Vaikom", "Palai", "Panniyannur", "Guruvayoor", "Puthuppally", "Panamattom"],
"Uttarakhand": ["Dehradun", "Hardwar", "Haldwani-cum-Kathgodam", "Srinagar", "Kashipur", "Roorkee", "Rudrapur", "Rishikesh", "Ramnagar", "Pithoragarh", "Manglaur", "Nainital", "Mussoorie", "Tehri", "Pauri", "Nagla", "Sitarganj", "Bageshwar"],
"Puducherry": ["Pondicherry", "Karaikal", "Yanam", "Mahe"],
"Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Pratapgarh", "Kailasahar", "Belonia", "Khowai"],
"Karnatka": ["Mysore"],
"Mizoram": ["Aizawl", "Lunglei", "Saiha"],
"Meghalaya": ["Shillong", "Tura", "Nongstoin"],
"Manipur": ["Imphal", "Thoubal", "Lilong", "Mayang Imphal"],
"Himachal Pradesh": ["Shimla", "Mandi", "Solan", "Nahan", "Sundarnagar", "Palampur"],
"Nagaland": ["Dimapur", "Kohima", "Zunheboto", "Tuensang", "Wokha", "Mokokchung"],
"Goa": ["Marmagao", "Panaji", "Margao", "Mapusa"],
"Arunachal Pradesh": ["Naharlagun", "Pasighat"],
"Dadra and Nagar Haveli": ["Silvassa"],
  };

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    return phone.length === 10 && /^\d{10}$/.test(phone);
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

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhone(value);
      
      if (value && !validatePhone(value)) {
        setPhoneError('Phone number must be exactly 10 digits');
      } else {
        setPhoneError('');
      }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !email || !phone || !dob || !password || !state || !city) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate email
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate phone
    if (!validatePhone(phone)) {
      alert("Phone number must be exactly 10 digits.");
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
          type: "register",
          name: username,
          email: email,
          phone,
          dob,
          state,
          city,
          password,
        }),
      });

      const result = await response.text();
      
      if (result === "Success") {
        alert("Registration successful!");
        navigate("/login");
      } else if (result.includes("Email already registered")) {
        alert("You are already registered! Please login.");
        navigate("/login");
      } else {
        alert("Registration failed: " + result);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section">
      <h2>Register</h2>
      <div className="cards">
        <div className="card">
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
                onChange={handleEmailChange} 
                disabled={isLoading}
                style={{ borderColor: emailError ? 'red' : '' }}
              />
              {emailError && <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{emailError}</div>}
            </div><br />

            <div>
              <label>Phone Number:</label><br />
              <input 
                type="text" 
                maxLength="10" 
                placeholder="Enter 10-digit Phone Number" 
                value={phone} 
                onChange={handlePhoneChange} 
                disabled={isLoading}
                style={{ borderColor: phoneError ? 'red' : '' }}
              />
              {phoneError && <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{phoneError}</div>}
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
                placeholder="Enter Password (8+ chars, letters, numbers, @&*)"
                value={password}
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
              </span>
              {passwordError && <div style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>{passwordError}</div>}
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