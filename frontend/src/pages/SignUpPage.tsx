import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router";
import TextInput from "../components/ui/TextInput";
import { ArrowLeft } from "lucide-react";

export default function SignUpPage() {
  const { signUpUser } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);

      const name = formData.get("name");

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
    <section className="px-4">
      <button onClick={() => navigate(-1)} className="icon-btn">
        <ArrowLeft />
      </button>
      <form className="p-4 mx-auto max-w-150" onSubmit={handleSubmit}>
        <h1 className="text-3xl my-6">Sign Up</h1>

        <div className="flex flex-col gap-3 mb-6">
          <label className="text-zinc-300" htmlFor="name">
            Name
          </label>
          <TextInput
            required={true}
            onChange={e => setName(e.target.value)}
            value={name}
            id="name"
            name="name"
            type="text"
          />
        </div>

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

        <div className="flex flex-col gap-3 mb-6">
          <label className="text-base font-medium" htmlFor="password">
            Password
          </label>

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
          Sign Up
        </Button>
      </form>
    </section>
  );
}
