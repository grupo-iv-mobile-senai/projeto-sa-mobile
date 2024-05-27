import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Use a suitable icon library
import CORES from '../../constantes/cores';

const CardVagas = () => {
  const [showMore, setShowMore] = useState(false);

  const appointments = [
    {
      doctor: 'Dr. Ana Lúcia',
      endereco: 'rua das moradas ',
      preco: 'R$:350 mensal',
    }

    
  ];

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Icon name="calendar-month-outline" size={24} color="#555" />
        <Text style={styles.headerText}>VAGA DE CARRO</Text>
      </View>  
      {appointments.map((appointment, index) => (
        <View key={index} style={styles.appointment}>
          <Text style={styles.appointmentDoctor}>{appointment.endereco}</Text>
          <Text style={styles.appointmentDate}>{appointment.endereco}</Text>
          <Text style={styles.appointmentSpecialty}>{appointment.preco}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={toggleShowMore}>
        <Text style={styles.buttonText}>{showMore ? 'Ver menos' : 'Ver mais'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: CORES.FUNDO_CARD,
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  appointment: {
    marginBottom: 8,
  },
  appointmentDoctor: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  appointmentDate: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
  },
  appointmentSpecialty: {
    fontSize: 12,
    color: '#555',
  },
  button: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CardVagas;
