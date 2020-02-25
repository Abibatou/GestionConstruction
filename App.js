import React from 'react';
import {  Button,Text, View, Card, Container ,Header, Right, Icon, Body, Title, Left, Content,  Form,Item, Input} from 'native-base';
import {FlatList, StyleSheet, Image,  } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Connexion from './Components/Connexion';
import Inscription from './Components/Inscription';
import Navbar from './Components/Navbar';
import Accueil from './Components/Accueil';
import Plan from './Components/Plan';
import ListeQuincaillerie from './Components/ListeQuincaillerie';
import NomQuincaillerie from './Components/NomQuincaillerie';
import Marteau from './Components/Marteau';
import Depenses from './Components/Depenses';
import Dashboard from './Components/Dashboard';
import Comparaison from './Components/Comparaison';
import { Ionicons } from '@expo/vector-icons';





const Tab = createBottomTabNavigator();

export default function App () {
  
  return(
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Accueil') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home';
          } else if (route.name === 'Dépenses') {
            iconName = focused 
            ? 'ios-cash' 
            : 'ios-cash';
          }else if (route.name === 'Dashboard') {
            iconName = focused 
            ? 'ios-tablet-portrait' 
            : 'ios-tablet-portrait';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={'#fc00aa'} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
        <Tab.Screen name="Accueil" component={Comparaison} />
        <Tab.Screen name="Dépenses" component={Depenses} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    </NavigationContainer>

  )

}


 
  
 