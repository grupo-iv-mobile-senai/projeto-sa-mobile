import { StyleSheet, View } from "react-native"

const [listaTarefas, setListaTarefas] = React.useState([]);

const estilos=StyleSheet.create ({
    card:{
        borderColor:'black',
        borderRadius:50
        
    }
})

const CardVaga = (props) =>{

    return(
        <View>
            <Text >card</Text>
        </View>
    )
}
export default CardVaga
