import React from 'react';
import {Text, View, Card, Container, Button} from 'native-base';
import {FlatList, StyleSheet} from 'react-native';
import Navbar from './Navbar';




export default function ListeQuincaillerie({navigation}){
    return (
        
      <Container >
        <Navbar/>
<View style={{alignItems:'center',marginBottom:20,marginTop:40 }}>
  <Text style={{fontWeight:'bold', fontSize:30, marginTop:40}}>Liste quincaillerie</Text>
</View>
<View>
  <FlatList
    data={[
      {key: 'Maison Empereur'},
      {key: 'True Value'},
      {key: 'Obi'},
      {key: 'Elec'}, 
    ]}
    renderItem={({item}) => <Card style={quincaillerie.liste}><Text  onPress={() => navigation.push('NomQuincaillerie')} style={{paddingLeft:20,paddingTop:30, color:'black'}}>{item.key}</Text></Card>}
  />
</View>
</Container>

 
   

    );
  }
  



  const quincaillerie = StyleSheet.create({
    liste:{
    
    marginLeft: 50,
    marginRight: 50,
    height:70,
    marginBottom:40,
    borderColor: '#000000',
    }
    })