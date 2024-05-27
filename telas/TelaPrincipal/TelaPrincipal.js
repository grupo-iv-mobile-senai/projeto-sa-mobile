import React, { useEffect } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import cores from "../../comum/constantes/cores"
import TELAS from "../../comum/constantes/telas";
import CardVagas from "../../comum/componentes/CardVagas/CardVaga";
import TelaLogin from "../TelaLogin";


const estilos = StyleSheet.create({

container:{
   flex:1,
   alignItems:'center'
},
botaoAlugar:{
   height: 40,
   borderRadius: 8,
   alignItems: 'center',
   justifyContent: 'center',
backgroundColor:cores.FUNDO_MAIS_ESCURO,
},
botaoAnunciar:{
   height: 40,
   borderRadius: 8,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor:cores.FUNDO_MAIS_ESCURO,
}

});

const TelaPrincipal =() => {


return(
   
   
   <View style={estilos.container}>

   
 <View>
   <BotaoCustomizado style={estilos.botaoAlugar}>alugar vaga</BotaoCustomizado>
    </View>   
   <View>
      <BotaoCustomizado style ={estilos.botaoAnunciar}>anunciar vaga</BotaoCustomizado>
   </View>
      <CardVagas/>
      <CardVagas/>


   </View>
  
)
}
export default TelaPrincipal