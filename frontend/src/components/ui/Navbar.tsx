export default function Navbar({ children }) {
  if (!Array.isArray(children))
    throw new Error("Navbar children must be typeof array.");
}
