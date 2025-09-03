import "./App.css";
import { CompareImage } from "./components/CompareImage";

function App() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="bg-amber-600 p-1.5">Портфолио </div>
            <CompareImage />
        </div>
    );
}

export default App;
