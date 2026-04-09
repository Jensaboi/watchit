import { createContext, useContext, useState, type ReactNode } from "react";

export const MenuContext = createContext();

export default function Menu({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen, close }}>
      <div className="relative">{children}</div>
    </MenuContext.Provider>
  );
}

export const useMenu = () => useContext(MenuContext);
