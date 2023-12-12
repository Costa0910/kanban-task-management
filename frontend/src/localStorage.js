export const saveState = (state) => {
  localStorage.setItem("state", JSON.stringify(state));
};

export const getState = () => {
  return JSON.parse(localStorage.getItem("state"));
};
