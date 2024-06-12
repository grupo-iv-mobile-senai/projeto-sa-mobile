import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { pegarItemStorage } from "../servicos/servicosStorage";
import TELAS from "../constantes/telas";
import { CHAVES_SOTORAGE } from "../constantes/ChavesStorage";
import CORES from "../constantes/cores";
import BotaoCustomizado from "./BotaoCustomizado/BotaoCustomizado";

const estilos = StyleSheet.create({
    tudo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: CORES.FUNDO_MAIS_ESCURO,
        height: 48,
    },
    image: {
        width: 200, // largura da imagem
        height: 200, // altura da imagem
        resizeMode: 'contain', // opcional, ajusta como a imagem se encaixa
    },
    botao:{
        backgroundColor: CORES.FUNDO_MAIS_CLARO,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        borderRadius: 30,
    }
});

const CabecalhoCustomizado = (props) => {
    const [usuarioLogado, setUsuarioLogado] = useState();
    const [image, setImage] = useState(null);

    useEffect(() => {
        const verificarSeUsuarioEstaLogado = async () => {
            const usuarioQueEstaNoStorage = await pegarItemStorage(CHAVES_SOTORAGE.USUARIO_LOGADO);
            setUsuarioLogado(usuarioQueEstaNoStorage);
        };

        verificarSeUsuarioEstaLogado();
    }, []);

    return (
        <View style={estilos.tudo}>
            {/* <Image source={require('../assets/logo.png')} style={estilos.image} /> */}
            <BotaoCustomizado style={estilos.botao} onPress={() => props.navigation.navigate(TELAS.TELA_LOGIN)}>
                <View>
                    <Text>sair</Text>
                </View>
            </BotaoCustomizado>
        </View>
    );
};

export default CabecalhoCustomizado;
