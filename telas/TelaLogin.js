
import { FlatList, StyleSheet, View } from "react-native";
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import React, { useEffect, useState } from "react";
import TELAS from "../comum/constantes/telas";
import { CHAVES_SOTORAGE } from "../comum/constantes/ChavesStorage";
import api from "../comum/servicos/api";
import { atualizarItemStorage } from "../comum/servicos/servicosStorage";
import ListagemVazia from "../comum/componentes/ListagemVazia";
import SeparadorLista from "../comum/componentes/SeparadorLista";
import ItemLista from "../comum/componentes/ItemLista";


const estilos = StyleSheet.create({
  tudo: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  icone: {
    alignItems: "center",
  },
  input: {
    padding: 10,
    width: 300,
    borderWidth: 2,
    margin: 15,
    fontSize: 20,
  },
  botao: {
    backgroundColor: "orange",
    alignItems: "center",
    borderRadius: 40,
    width: 240,
    margin: 15,
  },
  saida: {
    fontSize: 20,
    margin: 10,
  },
  texto: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "right",
  },
});

const TelaLogin = (props) => {
  const [clientes, setClientes] = useState([])
  const [campoEmail, setEmail] = useState('');
  const [campoSenha, setSenha] = useState('');

  const entrar = async () => {
    try {
      const response = await api.post("/logar", {
        email_cliente: campoEmail,
        senha_cliente: campoSenha
      });

      await atualizarItemStorage(CHAVES_SOTORAGE.USUARIO_LOGADO, response.data);
      props.navigation.navigate(TELAS.TELA_PRINCIPAL);

    } catch (error) {
      alert(error.response.data);
    }
  };

  useEffect(() => {
    const buscarUsuario = async () => {
      const res = await api.get('/cliente')
      setClientes(res.data)
    }
    buscarUsuario()
  }, [])

  return (
    <View style={estilos.tudo}>
      {/* <CampoTextoCustomizado
        style={estilos.input}
        label="Email"
        value={campoEmail}
        onChangeText={setEmail}
      />
      <CampoTextoCustomizado
        style={estilos.input}
        label="Senha"
        value={campoSenha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <BotaoCustomizado style={estilos.botao} onPress={entrar}>
        Entrar
      </BotaoCustomizado>
      
      <BotaoCustomizado style={estilos.botao} onPress={() => {
        props.navigation.navigate(TELAS.TELA_CADASTRO)
      }}
      >
        novo cadastro
      </BotaoCustomizado> */}

      <FlatList
        data={clientes}
        renderItem={ItemLista}
        ListEmptyComponent={ListagemVazia}
        keyExtractor={(item) => item.id_cliente}
        ItemSeparatorComponent={SeparadorLista}
      />
    </View>
  );

};

export default TelaLogin;
