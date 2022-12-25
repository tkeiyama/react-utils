# @tkeiyama/react-theme

A theme provider for a React application.

## Installation

You can use `npm`, `yarn` or `pnpm` to install.
`pnpm` is picked up for an example.

```
pnpm add @tkeiyama/react-theme
```

## Getting Started

> ### Examples
>
> You can see [examples with other libraries](./examples) using `@tkeiyama/react-theme`.

In this section, I describe how to use.

1. First off, you need to wrap your application with the `ThemeProvider` component.

```jsx
// src/root.js
import { ThemeProvider } from "@tkeiyama/react-dev-utils";
import { Component } from "./component";

export const Root = () => {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
};
```

2. Then, you can use the `useTheme` react hook that changes a theme in your application.

```jsx
// src/component.js
import { useTheme } from "@tkeiyama/react-dev-utils";

export const Component = () => {
  const { theme, changeTheme } = useTheme();

  return <button onClick={() => changeTheme()}>{theme}</button>;
};
```

## API

### ThemeProvider

A React provider component that gives an application the theme.

| name         | type              | optional | default | description                                                                                                                                             |
| ------------ | ----------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultTheme | "light" \| "dark" | yes      | "light" | A default theme provided to your application. If users already has the `app-theme` key in their browser local storage, the default theme depends on it. |
| children     | ReactNode         | no       |         | Components you want to provide a theme to.                                                                                                              |

### useTheme

A React hook that changes a theme.

> The following properties returned from `useTheme()`.

| name        | type                                | description                                                                                                                   |
| ----------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| theme       | "light" \| "dark"                   | A current theme provided in your application. This is also determined by the `app-theme` key in user's browser local storage. |
| changeTheme | (theme: "light" \| "dark" ) => void | A funciton to change a current theme to another.                                                                              |

## Contributing

Any contributions are welcomed :)
