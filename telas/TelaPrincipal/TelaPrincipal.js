import React, { useEffect } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";

const estilos = StyleSheet.create({
container :{
   flex:1,
}

});

const TelaPrincipal =() => {

   const [ListaVagas,SetListaVagas]= React.useState([]);
   const [CampoDescricao,setCampoDescricao]= React.useState('');



return(
   <SafeAreaView style={estilos.container}>

   <View>

 <View>
   <BotaoCustomizado style={estilos.botaoAlugar}>alugar vaga</BotaoCustomizado>
    </View>   
   <View>
      <BotaoCustomizado>anunciar vaga</BotaoCustomizado>
   </View>
      <FlatList />
   </View>
   </SafeAreaView>
)
}
export default TelaPrincipal