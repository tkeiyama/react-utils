# Theme

This gives a theme to your application.

## Usage

1. First off, you need to wrap your application with the `ThemeProvider` component.

```jsx
import { ThemeProvider } from "@tkeiyama/react-dev-utils";

export const Root = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
```

2. Then, you can use the `useTheme` react hook to change a theme in your application.

```jsx
import { useTheme } from "@tkeiyama/react-dev-utils";

export const Component = () => {
  const { theme, changeTheme } = useTheme();

  return <button onClick={() => changeTheme()}>{theme}</button>;
};
```

## React Components

### ThemeProvider

| name         | type              | optional | default | description                                                                                                                                                    |
| ------------ | ----------------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultTheme | "light" \| "dark" | "light"  | yes     | A default theme which provides to your application. If a user already has the `app-theme` key in their browser local storage, the default theme depends on it. |
| children     | ReactNode         | no       |         | The children you want to provide a theme to.                                                                                                                   |

## React Hooks

### useTheme

> Values returned from `useTheme()`.

| name        | type                                | description                                                                                                                   |
| ----------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| theme       | "light" \| "dark"                   | A current theme provided in your application. This is also determined by the `app-theme` key in user's browser local storage. |
| changeTheme | (theme: "light" \| "dark" ) => void | A funciton to change a current theme to another.                                                                              |
