import { useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native";
import api from "../comum/servicos/api";
import { Toast, useToast } from "native-base";
import TELAS from "../comum/constantes/telas";
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import CORES from "../comum/constantes/cores";
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";

const estilos = StyleSheet.create({
    tudo: {
        flex: 1,
    },
    texto: {
        fontSize: 22,
        margin: 5
    },
    input: {
        padding: 10,
        width: 300,
        borderWidth: 2,
        margin: 15,
        fontSize: 22,
    },
})

const TelaDetalhesVaga = (props) => {
    const toast = useToast()

    const [idVaga, setIdvaga] = useState(props.route.params?.vaga.id_vaga || '')
    const [nomeVaga, setNomeVaga] = useState(props.route.params?.vaga.nome_vaga || '');
    const [valorVaga, setValorVaga] = useState(props.route.params?.vaga.valor || '')
    const [capacidadeVaga, setCapacidadeVaga] = useState(props.route.params?.vaga.capacidade || '')
    const [veiculo, setVeiculo] = useState(props.route.params?.vaga.veiculo || '')
    const [logradouroVaga, setlogradouroVaga] = useState(props.route.params?.vaga.logradouro || '')
    const [bairroVaga, setBairroVaga] = useState(props.route.params?.vaga.bairro || '')
    const [cidadeVaga, setCidadeVaga] = useState(props.route.params?.vaga.cidade || '')
    const [estadoVaga, setEstadoVaga] = useState(props.route.params?.vaga.estado || '')

    const salvar = async () => {
        try {
            const vaga = {
                id_vaga: idVaga,
                nome_Vaga: nomeVaga,
                capacidadeVaga: capacidadeVaga,
                valorVaga: valorVaga,
                veiculoVaga: veiculo,
                logradouroVaga: logradouroVaga,
                bairroVaga: bairroVaga,
                cidadeVaga: cidadeVaga,
                estadoVaga: estadoVaga,
            }
            if (idVaga) {
                await api.put("/vaga", vaga);
            }
            toast.show({
                description: 'dados alterados com sucesso',
                placement: 'top'
            })
            props.navigation.navigate(TELAS.TELA_PRINCIPAL, { refresh: +new Date() });
        } catch (error) {
            toast.show({
                description: error.response.data,
                placement: 'top'
            })
        }
    }
    return (
        <ScrollView style={estilos.tudo}>
            <View style={{ alignItems: 'center' }}>
                <CampoTextoCustomizado disabled readonly style={estilos.input} label='Nome da vaga' value={nomeVaga} onChangeTeonChangeText={setNomeVaga} />
                <CampoTextoCustomizado disabled readonly style={estilos.input} label='Capacidade ' value={capacidadeVaga} onChangeTeonChangeText={setCapacidadeVaga} />
                <CampoTextoCustomizado disabled readonly style={estilos.input} label='Valor da vaga' value={valorVaga} onChangeTeonChangeText={setValorVaga} />
                <CampoTextoCustomizado disabled readonly style={estilos.input} label='Veiculo ' value={veiculo} onChangeTeonChangeText={setVeiculo} />
                <CampoTextoCustomizado disabled readonly style={estilos.input} label='Logradouro da vaga' value={logradouroVaga} onChangeTeonChangeText={setlogradouroVaga} />
                <CampoTextoCustomizado disabled readonly style={estilos.input} label='Bairro' value={bairroVaga} onChangeTeonChangeText={setBairroVaga} />
                <CampoTextoCustomizado disabled readonly style={estilos.input} label='Cidade' value={cidadeVaga} onChangeTeonChangeText={setCidadeVaga} />
                <CampoTextoCustomizado disabled readonly style={estilos.input} label='Estado' value={estadoVaga} onChangeTeonChangeText={setEstadoVaga} />
                <BotaoCustomizado onPress={salvar} >exlcuir vaga</BotaoCustomizado>
            </View>


        </ScrollView>
    )
}

export default TelaDetalhesVaga