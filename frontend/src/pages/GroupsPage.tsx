import { useQuery } from "@tanstack/react-query";
import { getGroups } from "../service/supabaseService";
import { queryClient } from "../App";
import { useLoaderData } from "react-router";
import { PlusIcon } from "lucide-react";
import Button from "../components/ui/Button";
import GroupCard from "../features/groups/components/GroupCard";
import { useModal } from "../context/ModalContext";
import CreateGroupModal from "../features/groups/components/CreateGroupModal";

export async function loader() {
  const query = {
    queryKey: ["groups"],
    queryFn: getGroups,
  };

  await queryClient.prefetchQuery(query);

  return { query };
}

export default function GroupsPage() {
  const { query } = useLoaderData();

  const { setModal } = useModal();

  const { isLoading, isError, error, data } = useQuery(query);

  return (
    <section>
      <div className="flex w-full justify-between px-4 align-center">
        <h1>Groups</h1>

        <Button
          onClick={() => setModal("create-group-modal")}
          variant="secondary"
        >
          Create group
        </Button>
      </div>

      <ul>
        {data.map(group => (
          <GroupCard name={group.name} />
        ))}
      </ul>

      <CreateGroupModal />
    </section>
  );
}
