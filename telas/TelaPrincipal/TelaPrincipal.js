import React, { useEffect } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import cores from "../../comum/constantes/cores"

const estilos = StyleSheet.create({


botaoAlugar:{
   height: 40,
   minWidth: 40,
   borderRadius: 8,
   alignItems: 'center',
   justifyContent: 'center',
backgroundColor:cores.FUNDO_MAIS_ESCURO,
},
botaoAnunciar:{
   height: 40,
   minWidth: 40,
   borderRadius: 8,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor:cores.FUNDO_MAIS_ESCURO,
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
      <BotaoCustomizado style ={estilos.botaoAnunciar}>anunciar vaga</BotaoCustomizado>
   </View>
      <FlatList />
   </View>
   </SafeAreaView>
)
}
export default TelaPrincipal