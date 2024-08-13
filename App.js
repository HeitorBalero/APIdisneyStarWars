import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';

const request = async(callback) => {
  const response = await fetch('https://swapi.dev/api/starships');
  const parsed = await response.json();
  callback(parsed.results);
};

export default function App() {
  const[registros, setregistros] = useState([])

  useEffect(()=>{
    request(setregistros);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Usando API do Star Wars </Text>
      <FlatList
      data={registros}
      keyExtractor={(item)=>item.name.toString()}
      renderItem={({item}) =>
        <View>
      <Text style={styles.item}>
        <Text>{item.name}</Text>
        <Text>{item.model}</Text>
        <Text>{item.manufacture}</Text>
      </Text>
      </View>
      }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    backgroundColor: '#AB49CC',
    borderRadius:20,
    margin: 50,
    fontSize: 30
    
  },
});
