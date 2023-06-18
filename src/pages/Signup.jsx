import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const onSubmit = async (event) => {
    event.preventDefault();
    await signup(email, password);
  };

  return (
    <form className="signup" onSubmit={onSubmit}>
      <h3>Sign up</h3>

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

      <button disabled={isLoading}>Sign up</button>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
