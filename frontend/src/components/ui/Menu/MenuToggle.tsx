import { useContext } from "react";
import { MenuContext } from "./Menu";

export default function MenuToggle({ children }) {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <button
      className="flex gap-1 items-center justify-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      {children}
    </button>
  );
}
