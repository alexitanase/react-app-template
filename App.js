import {StoreContextProvider} from "./src/context/StoreContext";
import {StackNavigator} from "./src/navigation/StackNavigator";

export default function App() {
    return (
        <StoreContextProvider>
            <StackNavigator />
        </StoreContextProvider>
    );
}