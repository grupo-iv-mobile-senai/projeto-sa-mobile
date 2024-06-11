import BotaoCustomizado from "../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Alert } from 'react-native';
import CORES from '../comum/constantes/cores';
import api from '../comum/servicos/api';
import { useToast } from 'native-base';
import TELAS from '../constantes/telas';

const TelaDetalhesVaga = (props) => {
    const [vaga, setVaga] = useState({});
    const toast = useToast();


    return (
        <ScrollView style={estilos.tudo}>
            <View style={{ alignItems: 'center' }}>
                <Text style={estilos.texto}>Informações da Vaga</Text>
                <Text style={estilos.detalhe}>Nome: {vaga.nome_vaga}</Text>
                <Text style={estilos.detalhe}>Capacidade: {vaga.capacidade}</Text>
                <Text style={estilos.detalhe}>Valor: R${vaga.valor}</Text>
                <Text style={estilos.detalhe}>Veículo: {vaga.veiculo}</Text>
                <Text style={estilos.texto}>Endereço</Text>
                <Text style={estilos.detalhe}>Logradouro: {vaga.logradouro}</Text>
                <Text style={estilos.detalhe}>Bairro: {vaga.bairro}</Text>
                <Text style={estilos.detalhe}>Cidade: {vaga.cidade}</Text>
                <Text style={estilos.detalhe}>Estado: {vaga.estado}</Text>
                <BotaoCustomizado onPress={deletarVaga} style={estilos.botao}>Excluir Vaga</BotaoCustomizado>
            </View>
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    tudo: {
        flex: 1,
    },
    texto: {
        fontSize: 24,
        margin: 3
    },
    detalhe: {
        fontSize: 20,
        margin: 3
    },
    botao: {
        marginTop: 20,
        backgroundColor: CORES.FUNDO_ESCURO,
        padding: 10,
        borderRadius: 10,
    }
});

export default TelaDetalhesVaga;
