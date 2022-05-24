import { useTheme } from "../../context/theme/theme.context";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import ReactSwitch from "react-switch";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className="app" style={theme}>
      <h1>Hello world!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita iusto
        quae quidem et, deserunt temporibus praesentium animi aliquam neque
        consequatur officiis! Modi exercitationem quibusdam error, vitae odit
        architecto veniam rerum.
      </p>
      {JSON.stringify(theme)}
      <ThemeSwitcher />
      {/* <ReactSwitch /> */}
    </div>
  );
};

export default App;
