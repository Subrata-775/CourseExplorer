import { FiCommand } from "react-icons/fi";
import './Spinner.css'
const Spinner = () => {
    return (
        <div className="flex flex-col items-center space-y-2">
            <FiCommand className="loading-icon " />
            <p className="text-2xl mx-2 font-semibold mt-2">Loading...</p>
        </div>
    )
}
export default Spinner;