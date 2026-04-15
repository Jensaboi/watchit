import { createPortal } from "react-dom";

export default function Modal({ isOpen, closeModal, children }) {
  return isOpen
    ? createPortal(
        <div className="w-full h-full absolute z-200 inset-0 bg-black/30">
          {children}
        </div>,
        document.body,
      )
    : null;
}
