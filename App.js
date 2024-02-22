import React, { useEffect} from "react";
import {Image} from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import Signin from "./src/screens/auth/Signin";
import Config from "react-native-config";
import {colors} from "./src/utils/colors";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import config from "./config";
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/screens/app/Home";
import Favourites from "./src/screens/app/Favourites";
import Profile from "./src/screens/app/Profile";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({focused, color, size}) => {
                let icon;

                if (route.name === "Home") {
                    icon = focused
                    ? require("./src/assets/tabs/home_active.png")
                    : require("./src/assets/tabs/home.png");
                } else if (route.name === "Favourites") {
                    icon = focused
                    ? require("./src/assets/tabs/bookmark_active.png")
                    : require("./src/assets/tabs/bookmark.png");
                } else if (route.name === "Profile") {
                    icon = focused
                    ? require("./src/assets/tabs/profile_active.png")
                    : require("./src/assets/tabs/profile.png");
                }

                return <Image style={{width: 24, height: 24}} source={icon}/>
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                borderTopColor: colors.lightGray,
            },
        })}
            >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Favourites" component={Favourites}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}

const App = () => {
    const { webClientId, iosClientId } = config;

    const isSignedIn = true;

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            webClientId: webClientId,
            offlineAccess: true,
            iosClientId: iosClientId,
        })
    }, [])

    const theme = {
        colors: {
            backgound: colors.white
        },
    }

    return (
        <SafeAreaProvider>
        <NavigationContainer theme={theme}>
            <Stack.Navigator>
                {
                    isSignedIn ? (
                        <>
                        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
                        </>
                        ) : (
                        <>
                        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
                        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
                        <Stack.Screen name="Signin" component={Signin} options={{headerShown: false}}/>
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App; 