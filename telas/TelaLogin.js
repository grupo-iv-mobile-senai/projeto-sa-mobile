import { StyleSheet, View } from "react-native"
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import React, { useEffect, useState } from "react"
import TELAS from "../comum/constantes/telas"
import { buscarStorage } from "./TelaCadastro"

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
    const [usuarios, setUsuarios] = useState([]);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        buscarStorage(setUsuarios);
    }, []);

    const entrar = () => {
        if (email.trim() && senha.trim()) {
            const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);
            if (usuarioEncontrado) {
                props.navigation.navigate(TELAS.TELA_PRINCIPAL);
            } else {
                alert('email ou senha incorretos');
            }
        } else {
            alert('Preencha os dados corretamente');
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