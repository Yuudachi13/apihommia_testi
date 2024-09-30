import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ULR = 'https://random-data-api.com/api/v2/beers'

export default function App() {

  const [brand, setBrand] = useState('')
  const [name, setName] = useState('')
  const [style, setStyle] = useState('')

  useEffect(() => {
    fetch(ULR)
    .then(response => response.json())
    .then((json) => {
      setBrand(json.brand)
      setName(json.name)
      setStyle(json.style)
    }).catch((error) =>{
      console.log(error)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Random beer fact </Text>
      <Text> {brand} </Text>
      <Text> {name} </Text>
      <Text> {style} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
