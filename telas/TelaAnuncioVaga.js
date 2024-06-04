import { StyleSheet, View, Text } from "react-native"
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import { useState } from "react"
import TELAS from "../comum/constantes/telas"
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import CORES from "../comum/constantes/cores"


const TelaAnuncioVaga = (props) => {

    const estilos = StyleSheet.create({
        tudo: {
            flex: 1,
            alignItems: 'center',
            marginTop: 50
        },
        input: {
            padding: 5,
            width: 330,
            margin: 5,
            fontSize: 22,
            borderWidth: 2
        },
        texto: {
            fontSize: 24,
            margin: 3
        },
        botao: {
            alignItems: 'center',
            backgroundColor: CORES.FUNDO_ESCURO,
            borderRadius: 30
        }

    })

    const [nomeVaga, setNomeVaga] = useState('')
    const [capacidade, setCapacidade] = useState('')
    const [valor, setValor] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    const cadastrarVaga = async () => {
        try {
            const vaga = {
                nome_vaga: nomeVaga,
                capacidade: capacidade,
                valor: valor,
                logradouro: logradouro,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            }
            await api.post('http://localhost/cadastro_vaga', vaga)
            alert('vaga salva ')
            props.navigation.navigate(TELAS.TELA_PRINCIPAL)
        }
        catch (error) {
            alert(error.response.data)
        }
    }

    return (
        <View style={estilos.tudo}>
            <Text style={estilos.texto}>Informações da Vaga</Text>
            <CampoTextoCustomizado style={estilos.input} label='nome da vaga' value={nomeVaga} onChangeText={setNomeVaga} />
            <CampoTextoCustomizado style={estilos.input} label='capacidade' value={capacidade} onChangeText={setCapacidade} />
            <CampoTextoCustomizado style={estilos.input} label='valor' value={valor} onChangeText={setValor} />
            <Text style={estilos.texto}>Endereço</Text>
            <CampoTextoCustomizado style={estilos.input} label='logradouro' value={logradouro} onChangeText={setLogradouro} />
            <CampoTextoCustomizado style={estilos.input} label='bairro' value={bairro} onChangeText={setBairro} />
            <CampoTextoCustomizado style={estilos.input} label='cidade' value={cidade} onChangeText={setCidade} />
            <CampoTextoCustomizado style={estilos.input} label='estado' value={estado} onChangeText={setEstado} />

            <BotaoCustomizado onPress={cadastrarVaga} style={estilos.botao}>cadastrar vaga</BotaoCustomizado>
        </View>
    )
}

export default TelaAnuncioVaga