import { StyleSheet, Text, View } from 'react-native';
import CORES from '../../comum/constantes/cores';

const estilos = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: CORES.CINZA,
  },
});

const ItemLista = (props) => {
  console.log(props);

  return (
    <View style={estilos.container}>
      <Text>{props.item.nome_vaga}</Text>
    </View>
  );
};

export default ItemLista;