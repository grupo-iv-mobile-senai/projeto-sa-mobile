<<<<<<< HEAD
import { StyleSheet, View } from "react-native";
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import React, { useEffect, useState } from "react";
import TELAS from "../comum/constantes/telas";
import { CHAVES_SOTORAGE } from "../comum/constantes/ChavesStorage";
import api from "../comum/servicos/api";
import { atualizarItemStorage } from "../comum/servicos/servicosStorage";
=======
import { StyleSheet, View } from "react-native"
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import React, { useEffect, useState } from "react"
import TELAS from "../comum/constantes/telas"
import api from "../comum/servicos/api"

>>>>>>> b08ad511e9d9c96b644a838c0fda692ee25f67bf

const estilos = StyleSheet.create({
  tudo: {
    flex: 1,
    alignItems: "center",
  },
  icone: {
    alignItems: "center",
  },
  input: {
    padding: 10,
    width: 300,
    border: "2px solid black",
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
<<<<<<< HEAD
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

  return (
    <View style={estilos.tudo}>
      <CampoTextoCustomizado
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
      <BotaoCustomizado style={estilos.botao} onPress={()=>{
          props.navigation.navigate(TELAS.TELA_CADASTRO)
      }}
      >
        novo cadastro
      </BotaoCustomizado>
    </View>
  );
=======
    const [clientes, setCliente] = useState([])
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (email.trim() && senha.trim()) {
            const clienteEncontrado = clientes.find(cliente => cliente.email_cliente === email && cliente.senha_cliente === senha)
            if (clienteEncontrado) {
                props.navigation.navigate(TELAS.TELA_PRINCIPAL)
            }
            else {
                alert('Email ou senha incorretos')
            }
        }
    };

    return (
        <View style={estilos.tudo}>
            <CampoTextoCustomizado style={estilos.input} label='Email' value={email} onChangeText={setEmail} />
            <CampoTextoCustomizado style={estilos.input} label='Senha' value={senha} onChangeText={setSenha} secureTextEntry />
            <BotaoCustomizado style={estilos.botao} onPress={entrar}>Entrar</BotaoCustomizado>
        </View>
    );
>>>>>>> b08ad511e9d9c96b644a838c0fda692ee25f67bf
};

export default TelaLogin;
