import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Screen1') {
              iconName = focused ? 'hand-rock-o' : 'hand-rock-o';
            
            } else if (route.name === 'Screen2') {
              iconName = focused ? 'bar-chart-o' : 'bar-chart-o';
            }
            else
              iconName = focused ? 'list' : 'list';

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { display: 'flex' },
        })}
      >
        <Tab.Screen name="Bands" component={Screen1} />
        <Tab.Screen name="Stats" component={Screen2} />
        <Tab.Screen name="Styles" component={Screen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
