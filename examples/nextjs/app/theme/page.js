"use client";

import { useTheme } from "@tkeiyama/react-utils";

export default function Page() {
  const { theme, changeTheme } = useTheme();

  return <button onClick={() => changeTheme()}>{theme}</button>;
}
