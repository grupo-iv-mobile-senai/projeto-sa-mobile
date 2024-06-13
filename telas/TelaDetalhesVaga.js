import { useState } from "react"
import { View } from "react-native";
import CampoTextoCustomizado from "../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";

const TelaDetalhesVaga = (props) => {
const [nomeVaga, setNomeVaga] = useState(props.route.params?.vaga.nome_vaga ||'');
const [valorVaga,setValorVaga]= useState(props.route.params?.vaga.valor ||'')

return(
    <View>
        <CampoTextoCustomizado label='nomeVaga' value={nomeVaga}  onChangeTeonChangeText={setNomeVaga}  />
    </View>
)
}

export default TelaDetalhesVaga