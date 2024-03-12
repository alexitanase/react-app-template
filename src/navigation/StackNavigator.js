import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {MainScreen} from "../components/screens/MainScreen";

export function StackNavigator() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Main" component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}