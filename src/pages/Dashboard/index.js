import React from 'react';
import { Text, View, Button, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import style from './style';

export const Dashboard = ({ navigation }) => (

  <View style={style.container}>
    <ScrollView style={style.scrollView}>
      <Image style={style.image} source={{ uri: "https://seeklogo.com/images/S/soccer-bets-logo-E899551478-seeklogo.com.png" }} />
      <TextInput style={style.input}
        placeholder='Usuário'
      />
      <TextInput style={style.input}
        placeholder='Senha'
      />
      <TouchableOpacity style={style.button}>
        <Text style={style.textButtonCalculator} onPress={() => navigation.navigate('Aposta')}>Entrar</Text>
      </TouchableOpacity>
    </ScrollView>

    <TouchableOpacity style={style.botaocadastro}>
      <Text style={style.textobotaocadastrar} onPress={() => navigation.navigate('AddUser')}>Criar cadastro</Text>
    </TouchableOpacity>

    </View>
    );

    export default Dashboard;
