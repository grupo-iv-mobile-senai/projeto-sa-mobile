import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TELAS from './comum/constantes/telas';
import TelaLogin from './telas/TelaLogin';
import { useEffect } from 'react';
import TelaCadastro from './telas/TelaCadastro';
import TelaPrincipal from './telas/TelaPrincipal/TelaPrincipal';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// useEffect(() => {
  //   buscarStorage();
  // }, []);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      textAlign: 'center'
    },
  });


const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen  name={TELAS.TELA_PRINCIPAL} component={TelaPrincipal} />
          <Stack.Screen name={TELAS.TELA_CADASTRO} component={TelaCadastro} />
          <Stack.Screen name={TELAS.TELA_CADASTRO} component={TelaCadastro} />
          <Stack.Screen name={TELAS.TELA_PRINCIPAL} component={TelaPrincipal} />

          <Stack.Screen name={TELAS.TELA_LOGIN} component={TelaLogin} />
        </Stack.Navigator>
      </NavigationContainer>
      <NavigationContainer>
      
      </NavigationContainer>
      
    </View>

  );


}
