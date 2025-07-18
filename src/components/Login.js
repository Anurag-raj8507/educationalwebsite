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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxdxu1HH1t8Ds3wIFyQ2VTaD2s35EFmhu7ZPHVvLW6QG1rDC_p2YQJAoQvPB617NKrDOQ/exec';

    fetch(scriptURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        type: 'login',
        email: email,
        password: password,
      }),
    })
      .then((res) => res.text())
      .then((data) => {
      //   if(data === 'Login successful') {
      //     alert('Login successful!');
      //     navigate('/dashboard'); // Redirect to dashboard
      //   }
      // })
        if (data === 'NOT_REGISTERED') {
          alert('You are not registered. Please sign up first.');
        } else if (data === 'INVALID_PASSWORD') {
          alert('Incorrect password. Please try again.');
        } else if (data === 'LOGIN_SUCCESS') {
          alert('Login successful!');
          navigate('/dashboard'); // 🔁 Redirect to dashboard
        } else {
          alert('Unexpected response: ' + data);
        }
      })
      .catch((err) => alert('Error: ' + err));
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
                placeholder="Enter email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <br />
            <div>
              <label>Password:</label><br />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;