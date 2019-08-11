import React from 'react';
import {
  Text, View, StyleSheet
} from 'react-native';
import { bold } from 'ansi-colors';

function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}> 
        Teste
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontWeight: 'bold',
    color: '#fff',
    fontSize:20,
  }
})

export default App;
