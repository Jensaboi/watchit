import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router";
import TextInput from "../components/ui/TextInput";

export default function SignInPage() {
  const { signInUser } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);

      const email = formData.get("email");

      const password = formData.get("password");

      const { success } = await signInUser({ email, password });

      if (success) navigate("/groups");

      return null;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section>
      <form className="p-4 mx-auto max-w-150" onSubmit={handleSubmit}>
        <h1 className="text-3xl my-6">Sign in</h1>

        <div className="flex flex-col gap-3 mb-6">
          <label className="text-zinc-300" htmlFor="email">
            Email
          </label>
          <TextInput
            required={true}
            onChange={e => setEmail(e.target.value)}
            value={email}
            id="email"
            name="email"
            type="email"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between align-center">
            <label className="text-base font-medium" htmlFor="password">
              Password
            </label>
            <Link
              className="text-zinc-400 text-sm hover:underline hover:text-zinc-200"
              to={"/"}
            >
              Forogt password?
            </Link>
          </div>
          <TextInput
            required={true}
            onChange={e => setPassword(e.target.value)}
            value={password}
            id="password"
            name="password"
            type="password"
          />
        </div>
        <Button className="w-full my-6" variant="primary">
          Sign in
        </Button>
        <p className="text-zinc-400 text-sm">
          Already have an account?
          <Link
            className="hover:text-zinc-200 hover:underline ml-2"
            to={"/signup"}
          >
            sign up here!
          </Link>
        </p>
      </form>
    </section>
  );
}
