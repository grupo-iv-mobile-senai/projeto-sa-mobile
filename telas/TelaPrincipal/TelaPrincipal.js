import React, { useEffect } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import cores from "../../comum/constantes/cores"
import TELAS from "../../comum/constantes/telas";
import CardVagas from "../../comum/componentes/CardVagas/CardVaga";
import TelaLogin from "../TelaLogin";


const estilos = StyleSheet.create({

   container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 30,
   },
   botaoAnunciar: {
      height: 60,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: cores.FUNDO_MAIS_ESCURO,
   }

});

const TelaPrincipal = (props) => {


   return (


      <View style={estilos.container}>
         <BotaoCustomizado
            style={estilos.botaoAnunciar}
            onPress={() => props.navigation.navigate(TELAS.TELA_ANUNCIO)}
         >anunciar vaga</BotaoCustomizado>
         <CardVagas />
         <CardVagas />
      </View>

   )
}
export default TelaPrincipal