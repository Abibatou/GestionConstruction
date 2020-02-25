<View>
      <View style={{marginBottom:30, alignItems:'center'}}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Nom quincaillerie</Text>
      </View>
      <View>
        <View style={{flexDirection:'row', flex:1}}>
          <Card style={[clou.carte,{ marginLeft:40, marginRight:50}]}></Card>
        
          <Card style={[clou.carte, {marginRight:40,marginLeft:50, height:70}]}></Card>
          
        </View>
       <View style={{flexDirection:'row', flex:1, alignItems:'center'}}>
         <Text style={clou.carte1}>5 clous</Text>
         <Text style={clou.carte2}>10 marteaux</Text>
       </View>
        
      </View>
      <View>
        <View style={{flexDirection:'row', flex:1}}>
          <Card style={[clou.carte,{ marginLeft:40, marginRight:50}]}></Card>
          <Card style={[clou.carte, {marginRight:40,marginLeft:50, height:70}]}></Card>
          
        </View>
       <View style={{flexDirection:'row', flex:1, alignItems:'center'}}>
         <Text style={clou.carte1}>..............</Text>
         <Text style={clou.carte2}>...............</Text>
       </View>
        
      </View>
      <View>
        <View style={{flexDirection:'row', flex:1}}>
          <Card style={[clou.carte,{marginLeft:40, marginRight:50}]}></Card>
          <Card style={[clou.carte, {marginRight:40,marginLeft:50, height:70}]}></Card>
          
        </View>
       <View style={{flexDirection:'row', flex:1,}}>
         <Text style={clou.carte1}>..............</Text>
         <Text style={clou.carte2}>................</Text>
       </View>
        
      </View>
     
      
    </View>
  

const clou = StyleSheet.create({
  carte: {
    borderColor:'black',
     flex:1,
  },
  carte1:{
    marginLeft:60,
     fontWeight:'bold',
     marginBottom:20,
     
  },
  carte2:{
    marginLeft:130,
     fontWeight:'bold',
     marginBottom:20,
  },
})