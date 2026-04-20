import { UseTheme } from "./lib/themeState";

function App() {
  const theme = UseTheme((state) => state.theme);
  const setTheme = UseTheme((state) => state.setTheme);
  // const handleSubmit = (formData: FormData) => {
  //   const themename = formData.get("name");
  //   if (themename == "light" || themename == "dark") {
  //     setTheme(themename);
  //   }
  // };
  const handleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <>
      <section className="text-4xl bg-blue-400">
        <h1 className="font-mono">
          OLA Everyone has the right to freedom{theme}
        </h1>
        <button onClick={handleTheme}>Change</button>
      </section>
    </>
  );
}

export default App;
