import { ThemeButton } from "./components/theme-button";
import { Login } from "./components/login";

function App() {
  return (
    <div className="flex m-0 p-0 flex-col items-center h-svh w-svw justify-center">
      <ThemeButton />
      <Login></Login>
    </div>
  );
}

export default App;
