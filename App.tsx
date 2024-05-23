import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Routes from './src/routes';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.conteiner}> 
      <Routes/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    backgroundColor:'#030F3D',
  },
});

export default App;
