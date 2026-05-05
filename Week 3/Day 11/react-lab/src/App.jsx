import { useCustomHook } from "./useCustomHook";
import { hello } from "./useCustomHook";

const App = () => {
    const customHook = useCustomHook();
    return (
        <div>
            {customHook}
            <p>{hello}</p>
        </div>
    )
}

export default App;