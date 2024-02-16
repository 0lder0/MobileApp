import React, { useEffect } from "react";
import {SafeAreaView} from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import Signin from "./src/screens/auth/Signin";
import Config from "react-native-config";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import config from "./config";
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
    const { webClientId, iosClientId } = config;

    useEffect(() => {
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'],
            webClientId: webClientId,
            offlineAccess: true,
            iosClientId: iosClientId,
        })
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App; 