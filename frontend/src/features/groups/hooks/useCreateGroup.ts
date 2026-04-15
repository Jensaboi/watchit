import { useMutation } from "@tanstack/react-query";
import { createGroup } from "../../../service/supabaseService";

export default function useCreateGroup() {
  return useMutation({ mutationFn: createGroup });
}
