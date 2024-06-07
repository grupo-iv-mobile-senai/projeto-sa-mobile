import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CORES from '../../comum/constantes/cores';

const estilos = StyleSheet.create({
  container: {
    backgroundColor: CORES.FUNDO_CARD,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  texto: {
    fontSize: 20,
  }
});

const ItemLista = (props) => {
  console.log(props);

  const detalhesVaga = () => {
    
  }

  return (
    <TouchableOpacity onPress={detalhesVaga}>
      <View style={estilos.container}>
        <Text style={estilos.texto}>{props.item.nome_vaga}</Text>
        <Text style={estilos.texto}>Endereço:{props.item.logradouro}</Text>
        <Text style={estilos.texto}>Valor: R${props.item.valor}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemLista;