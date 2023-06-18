import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <form className="login" onSubmit={onSubmit}>
      <h3>Log in</h3>

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button>Log in</button>
    </form>
  );
};

export default Login;
