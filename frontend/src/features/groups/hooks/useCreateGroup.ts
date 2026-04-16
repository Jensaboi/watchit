import { useMutation } from "@tanstack/react-query";
import { createGroup } from "../../../service/supabaseService";
import { useQueryClient } from "@tanstack/react-query";

export default function useCreateGroup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createGroup,
    onSuccess: async () => {
      await queryClient.invalidateQueries(["groups"]);
    },
  });
}
