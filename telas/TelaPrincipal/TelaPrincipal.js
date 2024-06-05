import React, { useEffect, useState } from "react"
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import cores from "../../comum/constantes/cores"
import TELAS from "../../comum/constantes/telas";
import CardVagas from "../../comum/componentes/CardVagas/CardVaga";
import TelaLogin from "../TelaLogin";
import ItemLista from "../../comum/componentes/ItemLista";
import ListagemVazia from "../../comum/componentes/ListagemVazia";
import SeparadorLista from "../../comum/componentes/SeparadorLista";
import api from "../../comum/servicos/api";


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
   const [vagas, setVagas] = useState([])

   useEffect(() => {
      const buscarVaga = async () => {
         const res = await api.get('/listar_vagas')
         setVagas(res.data)
      }
      buscarVaga()
   }, [])


   return (


      <View style={estilos.container}>
         <BotaoCustomizado
            style={estilos.botaoAnunciar}
            onPress={() => props.navigation.navigate(TELAS.TELA_ANUNCIO)}
         >anunciar vaga</BotaoCustomizado>
         <BotaoCustomizado onPress={() => props.navigation.navigate(TELAS.TELA_PERFIL)}>meu perfil</BotaoCustomizado>
         <FlatList
            data={vagas}
            renderItem={ItemLista}
            ListEmptyComponent={ListagemVazia}
            keyExtractor={(item) => item.id_vaga}
            ItemSeparatorComponent={SeparadorLista}
         />
      </View>

   )
}
export default TelaPrincipal