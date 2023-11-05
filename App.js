import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  var [data, setData] = useState([]);
  useEffect (()=>{
    fetch("https://65419e34f0b8287df1fe8c6a.mockapi.io/donut")
    .then(response => response.json())
    .then((json) =>{
      setData([...json]);
    });
  },[]);
  return (
          <View style={styles.container}>
                <View style={styles.view1}>
                    <Text style={{fontSize: 15, fontWeight: "bold"}}>Welcome, Jala!</Text>
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Choice you Best food</Text>
                    <TextInput style={styles.ip} placeholder="Search food"></TextInput>
                </View>
                <View style={styles.view3}>
                    <Text role="button" style={styles.btn1}>Donut</Text>
                    <Text role="button" style={styles.btn2}> Pink Donut</Text>
                    <Text role="button" style={styles.btn2}>Floating</Text>
                </View>
            { data.map((item)=>{
                return(
                  <View style={styles.view2}>
                    <Image 
                    source={{uri: item.image}}
                    style={{height: 100, width: 100, borderRadius: 10, margin: 10}}/>
                    <View>
                      <Text style={styles.text2}>{item.name}</Text>
                      <Text style={styles.text3}>{item.description}</Text>
                      <Text style={styles.text4}>{item.price}</Text>
                    </View>
                    <Text role="button" style={styles.btn} onPress={() => navigation.navigate('Details')}>+</Text>
                  </View> 
                );
            })
          
        }
          </View>
  );
}
function DetailsScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
          <View style={styles.view4}>
          <Image 
              source={require('./assets/pink_donut 1.png')}
              style={{height: 270, width: 285, marginLeft: 55, marginTop: 10}}/>
          </View>
          <View style={styles.view5}>
            <Text style={styles.text2}>Pink Donut</Text>
            <View style={{flexDirection: "row"}}>
              <Text style={styles.text3}>Spicy tasty donut family</Text>
              <Text style={styles.text5}>$20.00</Text>
            </View>
          </View>
          <View style={styles.view6}>
            <Text style={styles.text3}>Delivery in</Text>
            <Text style={styles.text2}>30 min</Text>
          </View>
          <View style={styles.view7}>
            <Text style={styles.text2}>Restaurants info</Text>
            <Text style={styles.text4}>Order a Large Pizza but the size is the equivalent
             of a medium/small from other places at the same price range.</Text>
          </View>
          <View style={styles.view7}>
              <Text role="button" style={styles.btn3}>Add to cart</Text>
          </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  view1: {
    height:"500",
    width: "100%",
    marginTop: 10,
    marginLeft: 20,
  },
  ip: {
    height: 50,
    width: "70%",
    borderColor: "silver",
    borderWidth: 1,
    backgroundColor: "#C4C4C41A",
    borderRadius: 5,
  },
  view2: {
    height:"500",
    width: "100%",
    marginTop: 10,
    backgroundColor: "#F4DDDD",
    flexDirection: "row",
  },
  text2: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 20,
  },
  text3: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
    color: "grey",
  },
  text4: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 10,
  },
  btn: {
    height: 50,
    width: 50,
    backgroundColor: "orange",
    borderTopLeftRadius: 170,
    borderBottomLeftRadius: 40,
    borderEndEndRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 70,
    marginLeft: 30,
    textAlign: "center",
    color: "white",
    fontSize: 40,
  },
  view3: {
    height: 50,
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
  },
  btn1: {
      height: 40,
      width: 110,
      backgroundColor: "#F1B000",
      textAlign: "center",
      fontSize: 16,
      fontWeight: "bold",
      marginLeft: 10,
      borderRadius: 5,
      borderColor: "black",
      borderWidth: 1,
  },
  btn2: {
    height: 40,
    width: 110,
    backgroundColor: "#C4C4C42B",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
},
view4:{
  height:"300",
  width: "100%",
},
view5:{
  height:"100",
  width: "100%",
  marginLeft: 10,
},
view6:{
  height:"100",
  width: "100%",
  marginLeft: 10,
  marginTop: 20,
},
text4: {
  fontSize: 14,
  fontWeight: "bold",
  marginLeft: 10,
  marginTop: 10,
  marginRight: 10,
  color: "grey",
},
view7:{
  height:"250",
  width: "100%",
  marginLeft: 10,
  marginTop: 10,
},
btn3: {
  height: 50,
  width: "90%",
  backgroundColor: "#F1B000",
  textAlign: "center",
  fontSize: 20,
  color: "white",
  fontWeight: "bold",
  marginLeft: 10,
  borderRadius: 5,
},
text5: {
  fontSize: 18,
  fontWeight: "bold",
  marginLeft: 100,
  marginTop: 10,
},
});
export default App;
