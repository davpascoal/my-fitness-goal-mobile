import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {MaterialCommunityIcons as MCIcon} from '@expo/vector-icons';
import Icon from 'react-native-ionicons';
import { View, Text } from 'react-native';

interface FooterProps {
  router: Array<any>;
}

const Footer = (props: FooterProps) => {
  const { router } = props;
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Workouts"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelPosition: 'below-icon',
      }}>
      {router.map((route) => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            tabBarLabel: route.name,
            tabBarIcon: () => <Icon name={route.icon} size={18} />,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Footer;
