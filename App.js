import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import WelcomeScreen from "./Screens/WelcomeScreen";
import MenuScreen from "./Screens/MenuScreen";

const Drawer = createDrawerNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
	    useLegacyImplementation>
     {/* screenOptions={{ drawerPosition: 'right' }}> */}
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Menu" component={MenuScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

