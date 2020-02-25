import React from 'react';
import { Text, View, Card, Icon, Button} from 'native-base';
import {StyleSheet} from 'react-native';
import Navbar from './Navbar';
import ListeQuincaillerie from './ListeQuincaillerie';
import Accueil from './Accueil';
import Depenses from './Depenses';
import Dashboard from './Dashboard';
import Comparaison from './Comparaison';




export default function Plan({navigation}){
    return(
      
      <View>
          <View><Navbar/></View>
          <View style={{marginTop:70}}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize:30, marginBottom:10, marginLeft:60}}>Plan</Text>
      </View>
      <View  style={{flex:1}}>
        <Card style={{marginLeft:20, marginRight:20, flexDirection:'column', height:300}}>
          <View style={[plan.decoupage, {flexDirection:'row'}]}>
            <Card style={{flex:1, marginRight:20, alignItems:'center',height:95, paddingTop:30}}>

              <Text >ch1</Text>
            </Card>
            <Card style={{flex:1, marginLeft:20,  alignItems:'center',height:95, paddingTop:30}}>
              <Text>ch1</Text>
            </Card>
          </View>
          <View style={plan.decoupage}>
            
            <Card style={[plan.partie, {marginRight:40, flex:1, height:95}]}>
            
              <Text>ch1</Text>
            </Card>
          
            <Card style={[plan.partie, {marginleft:40, flex:1, height:95}]}>
              <Text>ch1</Text>
            </Card>
          </View>
        </Card>
      </View>
      <View style={{marginLeft:20, marginTop:300}}>
        <View style={[plan.align, {marginTop:20}]}>
        <Button light onPress={() => navigation.push('ListeQuincaillerie')}><Icon name='checkmark-circle-outline' ></Icon></Button>
          <Text style={plan.dessin}>Construction étage</Text>
        </View>
        <View style={plan.align}>
        <Button light onPress={() => navigation.push('ListeQuincaillerie')}><Icon name='close-circle-outline' ></Icon></Button>
          <Text style={plan.dessin}>Fondation</Text>
        </View>
      </View>
      </View>
    </View>
    
   
    
    
      
    );
    
  }



  const plan = StyleSheet.create({
    decoupage:{
      flex:1,
       flexDirection:'row', 
       marginLeft:50,
        marginRight:50,
         marginTop:20,
    },
    partie:{
      flex:1, 
      marginTop:10,
      marginBottom:20, 
      alignItems:'center',
      
      paddingTop:30
    },
    align:{
      flexDirection:"row",
     
    },
    dessin:{
      marginTop:12, 
      fontWeight:'bold',
      marginLeft:10,
  
    }
  });