/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNav from './src/nav/AppNav';

const App = () => {
    return (
        <>
            <NavigationContainer>
                <AppNav />
            </NavigationContainer>
        </>
    );
};

export default App;
