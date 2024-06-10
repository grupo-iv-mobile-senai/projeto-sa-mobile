import { StyleSheet, ScrollView, Text, View } from "react-native"
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado"
import { useState } from "react"
import TELAS from "../comum/constantes/telas"
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado"
import CORES from "../comum/constantes/cores"
import api from "../comum/servicos/api"
import RNPickerSelect from 'react-native-picker-select';


const TelaAnuncioVaga = (props) => {

    const pickerSelectStyles = StyleSheet.create({
        inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
            color: 'black',
            paddingRight: 30,
        },
        inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            borderColor: 'purple',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30,
        },
    })

    const estilos = StyleSheet.create({
        tudo: {
            flex: 1,

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
        },
        viewSelect: {
            padding: 5,
            width: 330,
            margin: 5,
            fontSize: 22,
        }

    })

    const [nomeVaga, setNomeVaga] = useState('')
    const [capacidade, setCapacidade] = useState('')
    const [valor, setValor] = useState('')
    const [veiculo, setVeiculo] = useState('')
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
                veiculo: veiculo,
                logradouro: logradouro,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
            }
            console.log(vaga)
            await api.post('/adicionar_vaga', vaga)
            alert('vaga salva ')
            props.navigation.navigate(TELAS.TELA_PRINCIPAL, { refresh: +new Date() })
        }
        catch (error) {
            alert(error.response.data)
        }
    }

    

    return (
        <ScrollView style={estilos.tudo}>
            <View style={{ alignItems: 'center' }}>

                <Text style={estilos.texto}>Informações da Vaga</Text>
                <CampoTextoCustomizado style={estilos.input} label='nome da vaga' value={nomeVaga} onChangeText={setNomeVaga} />
                <CampoTextoCustomizado style={estilos.input} label='capacidade' value={capacidade} onChangeText={setCapacidade} />
                <CampoTextoCustomizado style={estilos.input} label='valor' value={valor} onChangeText={setValor} />
                <View style={estilos.viewSelect}>
                    <RNPickerSelect style={pickerSelectStyles}
                        onValueChange={setVeiculo}
                        value={veiculo}
                        items={[
                            { label: 'moto', value: 'moto' },
                            { label: 'carro', value: 'carro' },
                            { label: 'van', value: 'van' },
                            { label: 'caminhão', value: 'caminhao' },
                        ]}
                        placeholder={{ label: 'selecione uma operação', value: null }} />
                </View>
                <Text style={estilos.texto}>Endereço</Text>
                <CampoTextoCustomizado style={estilos.input} label='logradouro' value={logradouro} onChangeText={setLogradouro} />
                <CampoTextoCustomizado style={estilos.input} label='bairro' value={bairro} onChangeText={setBairro} />
                <CampoTextoCustomizado style={estilos.input} label='cidade' value={cidade} onChangeText={setCidade} />
                <CampoTextoCustomizado style={estilos.input} label='estado' value={estado} onChangeText={setEstado} />

                <BotaoCustomizado onPress={cadastrarVaga} style={estilos.botao}>cadastrar vaga</BotaoCustomizado>
            </View>
        </ScrollView>
    )
}

export default TelaAnuncioVaga