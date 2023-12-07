import { useMediaQuery } from "react-responsive";

export const useGetSize = () => {
  const systemPrefersDark = useMediaQuery({
    query: "(max-width: 750px)",
  });

  return systemPrefersDark;
};
