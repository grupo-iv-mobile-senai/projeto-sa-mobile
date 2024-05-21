import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TELAS from './comum/constantes/telas';
import TelaLogin from './telas/TelaLogin';
import { useEffect } from 'react';
import TelaCadastro from './telas/TelaCadastro';
import TelaPrincipal from './telas/TelaPrincipal';

// useEffect(() => {
//   buscarStorage();
// }, []);

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={TELAS.TELA_CADASTRO} component={TelaCadastro} />
          <Stack.Screen name={TELAS.TELA_LOGIN} component={TelaLogin} />
          <Stack.Screen name={TELAS.TELA_PRINCIPAL} component={TelaPrincipal} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center'
  },
});
