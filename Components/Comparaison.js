import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Connexion from './Connexion';
import Inscription from './Inscription';
import Navbar from './Navbar';
import Plan from './Plan';
import ListeQuincaillerie from './ListeQuincaillerie';
import NomQuincaillerie from './NomQuincaillerie';
import Marteau from './Marteau';
import Accueil from './Accueil';
import Depenses from './Depenses';
import Dashboard from './Dashboard';

const Stack = createStackNavigator();

export default function Comparaison(){
    return(
  <Stack.Navigator initialRouteName='Accueil'
    >
      <Stack.Screen
      
        name="Bienvenue sur notre site !!"
        component={Accueil} 
      />
      <Stack.Screen name="Inscription"
      component={Inscription}/>
      <Stack.Screen name="Connexion"
      component={Connexion}/>
      <Stack.Screen name="Plan"
      component={Plan}/>
      <Stack.Screen name="ListeQuincaillerie"
      component={ListeQuincaillerie}/>
      <Stack.Screen name="NomQuincaillerie"
      component={NomQuincaillerie}/>
      <Stack.Screen name="Marteau"
      component={Marteau}/>
    </Stack.Navigator>
    )
}