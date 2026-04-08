import { Outlet } from "react-router";
import AuthProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getImageConfig, getCountries } from "./service/apiService";

const queryClient = new QueryClient();

export async function loader() {
  try {
    const countries = await getCountries();

    const imgConfig = await getImageConfig();

    return { countries, imgConfig };
  } catch (err) {}
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
