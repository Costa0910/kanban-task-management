import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useColorScheme() {
  const [isDark, setIsDark] = usePersistedState("colorScheme", null);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return {
    isDark,
    setIsDark,
  };
}

/**
 * usePersistedState for dark mode and prefers-color-scheme media query
 * @see contra.io/react-responsive
 * @returns [isDark, setIsDark]
 */
function usePersistedState() {
  const systemPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem("colorScheme");
    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return systemPrefersDark;
  });

  useEffect(() => {
    localStorage.setItem("colorScheme", state);
  }, [state]);

  return [state, setState];
}
