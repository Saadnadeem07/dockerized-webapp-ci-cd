import React, { useState } from "react";
import { login } from "../api";
import "../styles.css";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(user);
      alert("Login Successful! Token: " + res.data.token);
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { login } from "../api";

// const Login = () => {
//   const [user, setUser] = useState({ email: "", password: "" });

//   const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await login(user);
//       alert("Login Successful! Token: " + res.data.token);
//     } catch (error) {
//       alert("Login Failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="email" type="email" placeholder="Email" onChange={handleChange} />
//       <input name="password" type="password" placeholder="Password" onChange={handleChange} />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default Login;
