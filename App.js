import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import telas from './comum/constantes/telas';
import TELAS from './comum/constantes/telas';
import TelaPrincipal from './telas/TelaPrincipal/TelaPreincipal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View>
     <NavigationContainer>
      <Stack.Navigator>
        
      </Stack.Navigator>
     </NavigationContainer>
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
