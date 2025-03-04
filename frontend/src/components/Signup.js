// import React, { useState } from "react";
// import { signup } from "../api";

// const Signup = () => {
//   const [user, setUser] = useState({ username: "", email: "", password: "" });

//   const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signup(user);
//       alert("Signup Successful");
//     } catch (error) {
//       alert("Signup Failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="username" placeholder="Username" onChange={handleChange} />
//       <input name="email" type="email" placeholder="Email" onChange={handleChange} />
//       <input name="password" type="password" placeholder="Password" onChange={handleChange} />
//       <button type="submit">Signup</button>
//     </form>
//   );
// };

// export default Signup;

import "../styles.css";
import React, { useState } from "react";
import { signup } from "../api";

const Signup = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(user);
      alert("Signup Successful");
    } catch (error) {
      alert("Signup Failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
          required
        />
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
