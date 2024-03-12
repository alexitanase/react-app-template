import {HomeScreen} from "./HomeScreen";
import {SearchScreen} from "./SearchScreen";
import {ProfileScreen} from "./ProfileScreen";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

export function MainScreen() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {color: '#000', paddingBottom: 5},
                    headerShown: false,
                    tabBarIcon: ({focused}) =>
                        focused ? (
                            <Entypo name="home" size={24} color="#008E97" />
                        ) : (
                            <AntDesign name="home" size={24} color="black" />
                        )
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarLabel: "Search",
                    tabBarLabelStyle: {color: '#000', paddingBottom: 5},
                    headerShown: false,
                    tabBarIcon: ({focused}) =>
                        focused ? (
                            <Feather name="search" size={24} color="#008E97" />
                        ) : (
                            <Feather name="search" size={24} color="black" />
                        )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: {color: '#000', paddingBottom: 5},
                    headerShown: false,
                    tabBarIcon: ({focused}) =>
                        focused ? (
                            <Ionicons name="person" size={24} color="#008E97" />
                        ) : (
                            <Ionicons name="person-outline" size={24} color="black" />
                        )
                }}
            />
        </Tab.Navigator>
    )
}