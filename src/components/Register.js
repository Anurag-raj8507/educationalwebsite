import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
    // Add these two useState hooks
const [state, setState] = useState('');
const [city, setCity] = useState('');
  const [password, setPassword] = useState('');

const navigate = useNavigate();

// State and city options (you can expand as needed)
const stateCityMap = {
  "Bihar": ["Patna", "Gaya", "Muzaffarpur","Bhagalpur", "Purnia", "Darbhanga","Motihari", "Sasaram", "Arrah"],
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

    if (!username || !email || !phone || !dob || !state || !city || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // 1. Check if email already registered
    const checkUrl = `https://script.google.com/macros/s/AKfycbxdxu1HH1t8Ds3wIFyQ2VTaD2s35EFmhu7ZPHVvLW6QG1rDC_p2YQJAoQvPB617NKrDOQ/exec?type=checkEmail&email=${email}`;
    
    try {
      const res = await fetch(checkUrl);
      const result = await res.text();

      if (result === "exists") {
        alert("Email already registered. Please log in.");
        return;
      }
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!username || !email || !phone || !dob || !password || !state || !city) {
//     alert("Please fill in all fields.");
//     return;
//   }

//   try {
//     const response = await fetch("https://script.google.com/macros/s/AKfycbxdxu1HH1t8Ds3wIFyQ2VTaD2s35EFmhu7ZPHVvLW6QG1rDC_p2YQJAoQvPB617NKrDOQ/exec", {
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

      // 2. If not exists, proceed to register
      const registerRes = await fetch('https://script.google.com/macros/s/AKfycbxdxu1HH1t8Ds3wIFyQ2VTaD2s35EFmhu7ZPHVvLW6QG1rDC_p2YQJAoQvPB617NKrDOQ/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          type: 'register',
          name: username,
          email: email,
          phone: phone,
          dob: dob,
          state:state,
          city: city,
          password: password
        })
      });

      const registerText = await registerRes.text();
      alert("Registered successfully: " + registerText);

      // Clear form
      setUsername('');
      setEmail('');
      setPhone('');
      setDob('');
      setState('');
      setCity('');
      setPassword('');

    } catch (err) {
      alert("Error: " + err.message);
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
              <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div><br />

            <div>
              <label>Email:</label><br />
              <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div><br />

            <div>
              <label>Phone Number:</label><br />
              <input type="text" maxLength="10" placeholder="Enter 10-digit Phone Number" value={phone} onChange={handlePhoneInput} />
            </div><br />

            <div>
              <label>Date of Birth:</label><br />
              <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
            </div><br />

           <div>
  <label>State:</label><br />
  <select value={state} onChange={(e) => {
    setState(e.target.value);
    setCity(''); // Reset city when state changes
  }}>
    <option value="">Select State</option>
    {Object.keys(stateCityMap).map((s) => (
      <option key={s} value={s}>{s}</option>
    ))}
  </select>
</div><br />

<div>
  <label>City:</label><br />
  <select value={city} onChange={(e) => setCity(e.target.value)} disabled={!state}>
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

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;