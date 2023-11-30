import { useColorScheme } from "../../hooks/colorSchema";
const DarkModeToggle = () => {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <div className="dark-mode-toggle">
      <span>
        <img src="./icon-light-theme.svg" alt="light" />
      </span>
      <label>
        <input
          type="checkbox"
          aria-hidden="true"
          aria-label="Toggle dark mode"
          checked={isDark}
          onChange={() => setIsDark((prev) => !prev)}
        />
        <span className="check"></span>
      </label>
      <span>
        <img src="./icon-dark-theme.svg" alt="dark" />
      </span>
    </div>
  );
};

export default DarkModeToggle;
