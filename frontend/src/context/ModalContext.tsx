import { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export default function ModalProvider({ children }) {
  const [modal, setModal] = useState<string | null>(null);

  const closeModal = () => setModal(null);

  const toggleModal = (val: string) => {
    if (val === modal) {
      setModal(null);
    } else {
      setModal(val);
    }
  };

  return (
    <ModalContext.Provider value={{ modal, closeModal, setModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
