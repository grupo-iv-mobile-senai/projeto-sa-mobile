import { StyleSheet, View } from "react-native"
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import CORES from "../comum/constantes/cores";
import { useState } from "react";

const TelaPerfil = () => {

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

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');

    return (
        <View style={estilos.tudo}>
            <CampoTextoCustomizado style={estilos.input} label='nome' value={nome} onChangeText={setNome} />
            <CampoTextoCustomizado style={estilos.input} label='email' value={email} onChangeText={setEmail} />
            <CampoTextoCustomizado style={estilos.input} label='senha' value={senha} onChangeText={setSenha} secureTextEntry={true} />
            <CampoTextoCustomizado style={estilos.input} label='cpf' value={cpf} onChangeText={setCpf} />
            <CampoTextoCustomizado style={estilos.input} label='telefone' value={telefone} onChangeText={setTelefone} />

            <BotaoCustomizado style={estilos.botao}>salvar</BotaoCustomizado>
            <BotaoCustomizado>deletar conta</BotaoCustomizado>
        </View>
    )
}

export default TelaPerfil