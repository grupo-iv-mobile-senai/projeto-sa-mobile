import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TELAS from './comum/constantes/telas';
import TelaLogin from './telas/TelaLogin';
import { useEffect, useState } from 'react';
import TelaCadastro from './telas/TelaCadastro';
import TelaPrincipal from './telas/TelaPrincipal/TelaPrincipal';
import { pegarItemStorage } from './comum/servicos/servicosStorage';
import { CHAVES_SOTORAGE } from './comum/constantes/ChavesStorage';
import TelaAnuncioVaga from './telas/TelaAnuncioVaga';
import TelaPerfil from './telas/TelaPerfil';
import EditarPerfil from './telas/TelaEditarPerfil/TelaEditarPerfil';



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

  const [usuariologado, setUsuariologado] = useState();
  useEffect(() => {
    const verificarUsuarioLogado = async () => {
      const usuarioNoStorage = await pegarItemStorage(CHAVES_SOTORAGE.USUARIO_LOGADO)
      setUsuariologado(usuarioNoStorage)
    }
    verificarUsuarioLogado();

  }, []);
  if (usuariologado === undefined) {
    return <></>
  }
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name={TELAS.TELA_LOGIN} component={TelaLogin} />
          <Stack.Screen name={TELAS.TELA_EDITAR_PERFIL} component={EditarPerfil} />
          <Stack.Screen name={TELAS.TELA_PRINCIPAL} component={TelaPrincipal} />
          <Stack.Screen name={TELAS.TELA_PERFIL} component={TelaPerfil} />
          <Stack.Screen name={TELAS.TELA_CADASTRO} component={TelaCadastro} />
          <Stack.Screen name={TELAS.TELA_ANUNCIO} component={TelaAnuncioVaga} />

        </Stack.Navigator>
      </NavigationContainer>

    </View>

  );


}
