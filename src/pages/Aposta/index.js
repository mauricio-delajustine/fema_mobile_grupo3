import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';
import style from './style';

export const Aposta = ({ navigation }) => {
  return (

    <View>
    <Text style={style.Titulo}>Formulário de aposta</Text>

    <Button
      title='Ver regulamento'
      onPress={() => navigation.navigate('Regulamento')}
    />

    </View>
  )
};

export default Aposta;
