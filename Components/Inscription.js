import React from 'react';
import {  View,Input, Button, Text, Form, Item} from 'native-base';

import Navbar from './Navbar';




export default function Inscription ({ navigation }){
    
    return(
      
        <View>
        <View>
          <Navbar/>
          </View>
      <View style={{alignItems:'center', marginTop: 200}}>
          
      <Form>
        <Item >
          <Text>
          Nom :
          </Text>
          <Input  placeholder="Nom" />
        </Item>
        <Item >
          <Text>
          Prenom :
          </Text>
          <Input  placeholder="Prénom" />
        </Item>
        <Item >
          <Text>
          Email :
          </Text>
          <Input  placeholder="Email" />
        </Item>
        <Item>
          <Text>
          Mot de passe :
          </Text>
          <Input placeholder="Mot de passe" />
        </Item>
        <Item >
          <Text>
          Répètez mot de passe :
          </Text>
          <Input  placeholder="Répètez votre mot de passe" />
        </Item>
        <Button onPress={() => navigation.push('Plan')} type="submit"  style={{backgroundColor: '#fd005c',  paddingLeft: 20,  marginTop: 10}} >
            <Text style={{color: 'white',}}>Inscription</Text>
        </Button>
      </Form>
    </View>
    </View>


    )
  }
