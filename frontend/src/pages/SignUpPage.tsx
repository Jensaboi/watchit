import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router";

export default function SignUpPage() {
  const { signUpUser } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);

      const email = formData.get("email");

      const password = formData.get("password");

      const { success } = await signUpUser({ email, password });

      if (success) navigate("/groups");

      return null;
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={e => setEmail(e.target.value)}
            value={email}
            id="email"
            name="email"
            type="email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            id="password"
            name="password"
            type="password"
          />
        </div>
        <Button type="submit" variant="primary">
          Sign up
        </Button>
      </form>
    </section>
  );
}
