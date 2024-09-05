import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Dashboard, Profile, Settings } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';

const Navigation = () => {
  const Tab = createBottomTabNavigator();
  return (

    <NavigationContainer>
      <Tab.Navigator initialRouteName='Dashboard'  screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      const icons:any = {
        Dashboard: 'view-dashboard-outline',
        Profile: 'account',
        Settings:"cellphone-settings"
      };

      return (
        <IconButton
         icon={icons[route?.name]}
        // icon={icons[route.name]}
        iconColor="black"
        size={20}
      />
     
      );
    },
  })}>
      <Tab.Screen name='Dashboard' component={Dashboard} />
      <Tab.Screen name='Profile' component={Profile} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
    </NavigationContainer >
  );
};
export default Navigation;
