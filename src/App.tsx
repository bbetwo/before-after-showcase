import "./App.css";
import { CompareImage } from "./components/CompareImage";

function App() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="relative text-4xl font-light text-gray-700 mb-8 border-b-2 border-red-600 pb-2">
                Портфолио
                <span className="absolute -top-[-37px] -right-8 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm">
                    Beta v0.1
                </span>
            </div>
            <CompareImage />
        </div>
    );
}

export default App;
