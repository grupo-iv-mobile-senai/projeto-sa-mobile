import { useState } from "react"
import { View } from "react-native";
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import { createIconSetFromFontello } from "react-native-vector-icons";
import api from "../comum/servicos/api";
import { Toast, useToast } from "native-base";
import TELAS from "../comum/constantes/telas";
import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado";

const TelaDetalhesVaga = (props) => {
    const toast =useToast()

    const [idVaga,setIdvaga] = useState(props.route.params?.vaga.id_vaga ||'')
const [nomeVaga, setNomeVaga] = useState(props.route.params?.vaga.nome_vaga ||'');
const [valorVaga,setValorVaga]= useState(props.route.params?.vaga.valor ||'')
const [capacidadeVaga,setCapacidadeVaga] = useState(props.route.params?.vaga.capacidade ||'')
const [logradouroVaga,setlogradouroVaga] = useState(props.route.params?.vaga.logradouro ||'')
const [bairroVaga,setBairroVaga] = useState(props.route.params?.vaga.bairro ||'')
const [cidadeVaga,setCidadeVaga] =useState(props.route.params?.vaga.cidade ||'')
const [estadoVaga,setEstadoVaga] =useState(props.route.params?.vaga.estado ||'')

const salvar = async () => {
    try{
        const vaga ={
            id_vaga: idVaga,
            nome_Vaga :nomeVaga,
            valorVaga : valorVaga,
            capacidadeVaga :capacidadeVaga,
            logradouroVaga : logradouroVaga,
            bairroVaga: bairroVaga,
            cidadeVaga: cidadeVaga,
            estadoVaga: estadoVaga,
        }
        if (idVaga){
            await api.put("/vaga",vaga);
        }
        Toast.show({
            description :'dados alterados com sucesso',
            placement:'top'
        })
        props.navigation.navigate(TELAS.TELA_PRINCIPAL,{refresh:+new Date() });
    }catch(error){
        toast.show({
            description:error.response.data,
            placement:'top'
        })
    }
}
return(
    <View>
        <CampoTextoCustomizado label='nome da Vaga' value={nomeVaga}  onChangeTeonChangeText={setNomeVaga}  />
        <CampoTextoCustomizado label='valor da Vaga' value={valorVaga}  onChangeTeonChangeText={setValorVaga}  />
        <CampoTextoCustomizado label='capacidade ' value={capacidadeVaga}  onChangeTeonChangeText={setCapacidadeVaga}  />
        <CampoTextoCustomizado label='logradouro da Vaga' value={logradouroVaga}  onChangeTeonChangeText={setlogradouroVaga}  />
        <CampoTextoCustomizado label='bairro' value={bairroVaga}  onChangeTeonChangeText={setBairroVaga}  />
        <CampoTextoCustomizado label='cidade' value={cidadeVaga}  onChangeTeonChangeText={setCidadeVaga}  />
        <CampoTextoCustomizado label='estado' value={estadoVaga}  onChangeTeonChangeText={setEstadoVaga}  />

            <BotaoCustomizado onPress={salvar} >salvar</BotaoCustomizado>


    </View>
)
}

export default TelaDetalhesVaga