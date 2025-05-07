import ToggleTheme from "../components/toggletheme"
import { ThemeProvider } from "@/context/themecontext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
        <ToggleTheme />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
