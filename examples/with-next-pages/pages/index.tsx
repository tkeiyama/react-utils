import { useTheme } from "@tkeiyama/react-utils";

export default function Index() {
  const { theme, changeTheme } = useTheme();

  const handleTheme = () => {
    changeTheme();
  };
  return (
    <div className="w-screen h-screen text-black dark:text-white bg-white dark:bg-black">
      <h1>pages - {theme}</h1>
      <button type="button" onClick={handleTheme}>Change Theme</button>
    </div>
  );
}