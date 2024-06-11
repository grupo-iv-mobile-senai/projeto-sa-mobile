import { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, StyleSheet, View, Platform, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import TELAS from "../comum/constantes/telas";
import api from "../comum/servicos/api"
import CORES from "../comum/constantes/cores";
import { useToast } from "native-base";

const estilos = StyleSheet.create({
    tudo: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
    },
    input: {
        padding: 10,
        width: 300,
        borderWidth: 2,
        margin: 15,
        fontSize: 20,
    },
    botao: {
        alignItems: 'center',
        backgroundColor: CORES.FUNDO_ESCURO,
        borderRadius: 30,
    },
})

const TelaCadastro = (props) => {

    const toast = useToast()

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    const vai = async () => {
        try {
            const usuario = {
                nome_cliente: nome,
                email_cliente: email,
                senha_cliente: senha,
                cpf_cliente: +cpf,
                telefone_cliente: +telefone,
            };
            await api.post('/cliente', usuario)
            toast.show({
                description: 'dados salvos',
                placement: 'top'
            })
            props.navigation.navigate(TELAS.TELA_LOGIN);
            console.log(usuario)
        } catch (error) {
            alert(error.response.data);
        }
    };


    return (
            <View style={estilos.tudo}>
                <CampoTextoCustomizado style={estilos.input} label='nome' value={nome} onChangeText={setNome} />
                <CampoTextoCustomizado style={estilos.input} label='email' value={email} onChangeText={setEmail} />
                <CampoTextoCustomizado style={estilos.input} label='senha' value={senha} onChangeText={setSenha} secureTextEntry={true} />
                <CampoTextoCustomizado style={estilos.input} label='cpf' value={cpf} onChangeText={setCpf} />
                <CampoTextoCustomizado style={estilos.input} label='telefone' value={telefone} onChangeText={setTelefone} />

                <BotaoCustomizado style={estilos.botao} onPress={vai}>enviar</BotaoCustomizado>
            </View>

    );
};

export default TelaCadastro;

