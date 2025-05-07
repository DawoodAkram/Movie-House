import { useTheme } from "@/context/themecontext"
import { Button } from "./ui/button"
import { Moon, Sun } from "lucide-react"
const ToggleTheme = () => {
    const { darkMode, toggleTheme } = useTheme()

    return (
        <header className="p-4 flex justify-end">
            <Button variant="outline" onClick={toggleTheme} className="bg-white">
                {darkMode ? <Sun className="m-1" /> : <Moon className="m-1" />}
                {/* {darkMode ? "Light Mode" : "Dark Mode"} */}
            </Button>
        </header>
    )
}

export default ToggleTheme