import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { CHAVES_SOTORAGE } from "./comum/constantes/ChavesStorage";
import TELAS from "./comum/constantes/telas";
import { pegarItemStorage } from "./comum/servicos/servicosStorage";
import TelaAnuncioVaga from "./telas/TelaAnuncioVaga";
import TelaCadastro from "./telas/TelaCadastro";
import TelaDetalhesVaga from "./telas/TelaDetalhesVaga";
import TelaEditarPerfil from "./telas/TelaEditarPerfil/TelaEditarPerfil";
import TelaLogin from "./telas/TelaLogin";
import TelaPrincipal from "./telas/TelaPrincipal/TelaPrincipal";

// useEffect(() => {
//   buscarStorage();
// }, []);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    textAlign: "center",
  },
});

const Stack = createStackNavigator();

export default function App() {
  const [usuariologado, setUsuariologado] = useState();
  useEffect(() => {
    const verificarUsuarioLogado = async () => {
      const usuarioNoStorage = await pegarItemStorage(
        CHAVES_SOTORAGE.USUARIO_LOGADO
      );
      setUsuariologado(usuarioNoStorage);
    };
    verificarUsuarioLogado();
  }, []);
  if (usuariologado === undefined) {
    return <></>;
  }
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ cardStyle: { flex: 1 } }}>
            <Stack.Screen
              name={TELAS.TELA_PRINCIPAL}
              component={TelaPrincipal}
            />
            <Stack.Screen
              name={TELAS.TELA_DETALHES_VAGA}
              component={TelaDetalhesVaga}
            />
            <Stack.Screen name={TELAS.TELA_LOGIN} component={TelaLogin} />
            <Stack.Screen name={TELAS.TELA_CADASTRO} component={TelaCadastro} />
            <Stack.Screen
              name={TELAS.TELA_ANUNCIO}
              component={TelaAnuncioVaga}
            />
            <Stack.Screen
              name={TELAS.TELA_EDITAR_PERFIL}
              component={TelaEditarPerfil}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </NativeBaseProvider>
  );
}
