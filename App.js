import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AddUser from './src/pages/AddUser';
import Dashboard from './src/pages/Dashboard';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ route }) {
  const { contactsListRef } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: 'Tela Inicial',
          tabBarIcon:  ({ color, size}) => <Ionicons name="home-outline" size={size} color={color} />
        }}
        name="Dashboard"
        component={Dashboard}
      />

      <Tab.Screen
        options={{
          title: 'Uepa',
          tabBarIcon:  ({ color, size}) => <Ionicons name="home-outline" size={size} color={color} />
        }}
        name="Dashboard"
        component={Dashboard}
      />
      
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{ title: 'Login' }} name="Dashboard" component={Dashboard} />
      <Stack.Screen options={{ title: 'Cadastro de usuário' }} name="AddUser" component={AddUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};