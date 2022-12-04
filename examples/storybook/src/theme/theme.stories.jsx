import { ThemeProvider, useTheme } from "@tkeiyama/react-utils";

export default {
  title: "theme",
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Preview = () => {
  const { theme, changeTheme } = useTheme();

  return <button type="button" onClick={() => changeTheme()}>{theme}</button>;
};
