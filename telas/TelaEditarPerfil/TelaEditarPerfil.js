import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import BotaoCustomizado from '../../comum/componentes/BotaoCustomizado/BotaoCustomizado';
import CampoTextoCustomizado from '../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado';
import TELAS from '../../comum/constantes/telas';
import api from '../../comum/servicos/api';
import { pegarItemStorage } from '../../comum/servicos/servicosStorage';
import { CHAVES_SOTORAGE } from '../../comum/constantes/ChavesStorage';

const EditarPerfil = (props) => {
  const [campoNome, setCampoNome] = useState('');
  const [campoEmail, setCampoEmail] = useState('');
  const [campoTelefone, setCampoTelefone] = useState('');
  const [campoNovaSenha, setCampoNovaSenha] = useState('');
  const [idCliente, setIdCliente] = useState('');

  useEffect(() => {
    const verificarUsuarioLogado = async () => {
      const usuarioQueEstaNoStorage = await pegarItemStorage(CHAVES_SOTORAGE.USUARIO_LOGADO);
      if (usuarioQueEstaNoStorage) {
        setIdCliente(usuarioQueEstaNoStorage.id_cliente);
        setCampoNome(usuarioQueEstaNoStorage.nome_cliente);
        setCampoEmail(usuarioQueEstaNoStorage.email_cliente);
        setCampoTelefone(usuarioQueEstaNoStorage.telefone_cliente);
      }
    };

    verificarUsuarioLogado();
  }, []);

  const salvar = async () => {
    try {
      const usuario = {
        id_cliente: idCliente,
        nome_cliente: campoNome,
        email_cliente: campoEmail,
        senha_cliente: campoNovaSenha,
        telefone_cliente: campoTelefone,
      };

      if (idCliente) {
        await api.put('/cliente', usuario);
      } else {
        await api.post('/cliente', usuario);
      }
      Alert.alert('Sucesso', 'Dados salvos com sucesso!');
      props.navigation.navigate(TELAS.TELA_PRINCIPAL, { refresh: +new Date() });
    } catch (error) {
      Alert.alert('Erro', error.response.data);
    }
  };

  const excluir = async () => {
    try {
      Alert.alert(
        'Confirmação',
        'Tem certeza?',
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Confirmar',
            onPress: async () => {
              await api.delete(`/cliente/${idCliente}`);
              Alert.alert('Sucesso', 'Usuário excluído com sucesso!');
              props.navigation.navigate(TELAS.TELA_PRINCIPAL, { refresh: +new Date() });
            },
          },
        ],
      );
    } catch (error) {
      Alert.alert('Erro', error.response.data);
    }
  };

  return (
    <View style={{ padding: 16, gap: 16 }}>
      {idCliente && <CampoTextoCustomizado label='ID' value={idCliente} disabled readonly />}

      <CampoTextoCustomizado label='Nome' value={campoNome} onChangeText={setCampoNome} />
      <CampoTextoCustomizado label='E-mail' value={campoEmail} onChangeText={setCampoEmail} />
      <CampoTextoCustomizado label='Telefone' value={campoTelefone} onChangeText={setCampoTelefone} />

      {!idCliente && (
        <CampoTextoCustomizado label='Nova Senha' value={campoNovaSenha} onChangeText={setCampoNovaSenha} />
      )}

      <BotaoCustomizado cor='primaria' onPress={salvar}>
        Salvar
      </BotaoCustomizado>

      {idCliente && (
        <BotaoCustomizado cor='secundaria' onPress={excluir}>
          Excluir
        </BotaoCustomizado>
      )}
    </View>
  );
};

export default EditarPerfil;
