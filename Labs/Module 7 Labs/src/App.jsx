import "./App.css";
import { EmojiProvider } from "./context/EmojiContext";
import { UserProvider } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";

function App() {

  return (
    <>
      <UserProvider>
        <EmojiProvider>
          <NavBar />
          <AppRoutes />
        </EmojiProvider>
      </UserProvider>
    </>
  );
}

export default App;
