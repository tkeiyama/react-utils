import { useTheme } from "@tkeiyama/react-utils";
import { Test } from "../src/test";

export default function Index() {
  const { theme, changeTheme } = useTheme();

  const handleTheme = () => {
    changeTheme();
  };
  return (
    <div>
      <div>
        <h1>pages - {theme}</h1>
        <button type="button" onClick={handleTheme}>Change Theme</button>
      </div>
      <div>
        <Test>Div</Test>
        <Test as="button" backgroundColor="red" type="button">Button</Test>
      </div>
    </div>
  );
}
