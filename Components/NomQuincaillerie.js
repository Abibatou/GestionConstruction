import React from 'react';
import {Text, View, Card, Button} from 'native-base';
import {StyleSheet, Image} from 'react-native';
import Navbar from './Navbar';
import Comparaison from './Comparaison';

export default function NomQuincaillerie({navigation}){
    return(
      
      <View>
        <View>
        <Navbar/>
        </View>
      <View style={{marginTop: 80,marginBottom:30,  alignItems:'center'}}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Nom quincaillerie</Text>
      </View>
      <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
          <Card style={[clou.carte,{ marginLeft:40, marginRight:50, height:70}]}><Button style={{backgroundColor: 'white',flex:1, paddingLeft:20}} ><Image source={require('../images/clou.jpg')} style={{width:60, height:50, backgroundColor:'white'}} /></Button></Card>
        
          <Card style={[clou.carte, {marginRight:40,marginLeft:50, height:70}]}><Button style={{backgroundColor: 'white',flex:1, paddingLeft:20}} onPress={() => navigation.push('Marteau')}><Image source={require('../images/marteau.jpg')} style={{width:60, height:50, backgroundColor:'white'}} /></Button></Card>
          
        </View>
       <View style={{flexDirection:'row', alignItems:'center'}}>
         <Text style={[clou.carte1]}>5 clous</Text>
         <Text style={clou.carte2}>10 marteaux</Text>
       </View>
        
      </View>
      <View>
        <View style={{flexDirection:'row'}}>
          <Card style={[clou.carte,{ marginLeft:40, marginRight:50, height:70 }]}><Button style={{backgroundColor: 'white',flex:1, paddingLeft:20}} ><Image source={require('../images/brique.jpg')} style={{width:60, height:50, backgroundColor:'white'}} /></Button></Card>
          <Card style={[clou.carte, {marginRight:40,marginLeft:50, height:70}]}><Button style={{backgroundColor: 'white',flex:1, paddingLeft:20}} ><Image source={require('../images/ciment.jpg')} style={{width:60, height:50, backgroundColor:'white'}} /></Button></Card>
          
        </View>
       <View style={{flexDirection:'row', alignItems:'center'}}>
         <Text style={clou.carte1}>50 briques</Text>
         <Text style={clou.carte2}>Ciment</Text>
       </View>
        
      </View>
      <View>
        <View style={{flexDirection:'row'}}>
          <Card style={[clou.carte,{marginLeft:40, marginRight:50, height:70}]}><Button style={{backgroundColor: 'white',flex:1, paddingLeft:20}} ><Image source={require('../images/peinture.jpg')} style={{width:60, height:50, backgroundColor:'white'}} /></Button></Card>
          <Card style={[clou.carte, {marginRight:40,marginLeft:50, height:70}]}><Button style={{backgroundColor: 'white',flex:1, paddingLeft:20}} ><Image source={require('../images/plomberie.jpg')} style={{width:60, height:50, backgroundColor:'white'}} /></Button></Card>
          
        </View>
       <View style={{flexDirection:'row',}}>
         <Text style={clou.carte1}>Peinture</Text>
         <Text style={clou.carte2}>Plomberie</Text>
       </View>
        
      </View>   
    </View>
    
    )
  }



  const clou = StyleSheet.create({
    carte: {
      borderColor:'black',
       flex:1,
    },
    carte1:{
      marginLeft:60,
       fontWeight:'bold',
       marginBottom:40,
       
    },
    carte2:{
      marginLeft:130,
       fontWeight:'bold',
       marginBottom:40,
    },
  })



