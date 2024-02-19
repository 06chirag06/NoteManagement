const setBodyColor = ({ color }) => {
  document.documentElement.style.setProperty("--body-color", color);
  console.log(color);
};

export default setBodyColor;
