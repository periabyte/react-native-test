import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../componets/Login';
import Products from '../componets/Products';

const AppRootNav = createStackNavigator();

export default () => (
    <AppRootNav.Navigator>
        <AppRootNav.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
        />
        <AppRootNav.Screen
            name="Products"
            component={Products}
            options={{
                headerStyle: {
                    backgroundColor: '#0087E1',
                },
                headerTintColor: '#fff',
            }}
        />
    </AppRootNav.Navigator>
);
