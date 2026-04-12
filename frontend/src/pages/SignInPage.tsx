import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
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
      </form>
    </div>
  );
}
