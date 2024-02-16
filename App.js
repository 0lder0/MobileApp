import React, { useEffect } from "react";
import {SafeAreaView} from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import Signin from "./src/screens/auth/Signin";
import Config from "react-native-config";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import config from "./config";

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
        <SafeAreaView>
            <Signin/>
        </SafeAreaView>
    );
};

export default App; 