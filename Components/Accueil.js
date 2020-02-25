import React from 'react';
import {  Button,Text, View} from 'native-base';
import { Image, StyleSheet } from 'react-native';




export default function Accueil ({ navigation }){
   
        return(
<View style={{alignItems:'center', marginTop:180, flex: 1, backgroundColor:'white'}}>
      <View>
        <Image source={require('../images/logo.jpg')} style={{width:40, height:70, backgroundColor:'white'}}/>
        <Text style={{marginTop: 10, marginBottom: 50}}>
          My app
        </Text>
      </View>
      <View style={accueil.bouton}>
        <Button light onPress={() => navigation.navigate('Inscription')}>
          <Text>
            Inscription
          </Text>
        </Button>
      </View>
      <View style={accueil.bouton}>
        <Button light  onPress={() => navigation.navigate('Connexion')}>
          <Text>
            Connexion
          </Text>
        </Button>
      </View>

    </View>
       )
    }


const accueil = StyleSheet.create({
    bouton : {
      marginTop: 20,
      backgroundColor: 'white',
      borderRadius: 30,
      color:'black',
      
    }
    });