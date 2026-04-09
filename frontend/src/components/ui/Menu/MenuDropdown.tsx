import { useContext } from "react";
import { MenuContext } from "./Menu";

export default function MenuDropdown({ children }) {
  const { isOpen } = useContext(MenuContext);
  return isOpen ? (
    <div className="absolute z-10 bg-zinc-800 min-w-[160px] p-2 rounded-sm right-0 top-full shadow-lg">
      {children}
    </div>
  ) : null;
}
