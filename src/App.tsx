import { RouterProvider } from "react-router-dom";
import { GlobalContextProvider } from "./contexts/globalContext";
import { Web3Provider } from "./contexts/web3context";
import router from "./pages/router";

export default function App() {
  return (
    <GlobalContextProvider>
      <Web3Provider>
        <RouterProvider router={router} />
      </Web3Provider>
    </GlobalContextProvider>
  );
}
