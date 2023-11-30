import { useColorScheme } from "../../hooks/colorSchema";

const DarkModeToggle = () => {
  const { isDark, setIsDark } = useColorScheme();
  console.log("dark:", isDark);
  return (
    <div onClick={() => setIsDark((prev) => !prev)} className="cursor-pointer">
      {isDark ? "dark" : "light"}
    </div>
    // <button onClick={() => setIsDark((prev) => !prev)}>
    //   {isDark ? "dark" : "light"}
    // </button>
  );
};

export default DarkModeToggle;
