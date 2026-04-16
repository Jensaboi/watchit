import { X } from "lucide-react";
import Modal from "../../../components/ui/Modal";
import { useAuth } from "../../../context/AuthContext";
import { useModal } from "../../../context/ModalContext";
import useCreateGroup from "../hooks/useCreateGroup";
import TextInput from "../../../components/ui/TextInput";
import Button from "../../../components/ui/Button";

export default function CreateGroupModal() {
  const { modal, closeModal } = useModal();

  const { session, user } = useAuth();

  const { mutate } = useCreateGroup();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      const name = formData.get("name");

      const userId = user.id;

      const data = mutate({ name, userId });
    } catch (error) {}
  }
  return (
    <Modal isOpen={modal === "create-group-modal"} closeModal={closeModal}>
      <div className="w-full bg-zinc-800">
        <div className="flex align-center justify-between">
          <span>Create group</span>
          <button className="icon-btn" onClick={closeModal}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Group name: </label>
          <TextInput required={true} id="name" type="text" name="name" />
          <Button variant="primary">Create</Button>
        </form>
      </div>
    </Modal>
  );
}
