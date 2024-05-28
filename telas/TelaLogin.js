import { StyleSheet, View } from "react-native"
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import React, { useEffect, useState } from "react"
import TELAS from "../comum/constantes/telas"
import api from "../comum/servicos/api"


const estilos = StyleSheet.create({
    tudo: {
        flex: 1,
        alignItems: 'center'

    },
    icone: {
        alignItems: 'center'
    },
    input: {
        padding: 10,
        width: 300,
        border: '2px solid black',
        margin: 15,
        fontSize: 20,
    },
    botao: {
        backgroundColor: 'orange',
        alignItems: 'center',
        borderRadius: 40,
        width: 240,
        margin: 15
    },
    saida: {
        fontSize: 20,
        margin: 10,
    },
    texto: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'right',
    },
})

const TelaLogin = (props) => {
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
};


export default TelaLogin