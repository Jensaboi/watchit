import Modal from "../../../components/ui/Modal";
import { useAuth } from "../../../context/AuthContext";
import { useModal } from "../../../context/ModalContext";
import useCreateGroup from "../hooks/useCreateGroup";

export default function CreateGroupModal() {
  const { modal, closeModal } = useModal();

  const { session } = useAuth();

  const { mutate } = useCreateGroup();

  function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      const name = formData.get("name");
    } catch (error) {}
  }
  return (
    <Modal isOpen={modal === "create-group-modal"} closeModal={closeModal}>
      <div>
        <h1>Modal is open</h1>
        <button onClick={closeModal}>close modal</button>
      </div>
    </Modal>
  );
}
