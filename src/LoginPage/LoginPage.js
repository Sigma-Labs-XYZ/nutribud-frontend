import "./LoginPage.css";
import { ThemeProvider } from "@emotion/react";

export default function LoginPage(props) {
  return (
    <div>
      <ThemeProvider theme={props.theme}>
        {/* component(s) goes here */}
      </ThemeProvider>
    </div>
  );
}
