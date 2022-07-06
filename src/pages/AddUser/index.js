import React, { useState } from 'react';
import { Text, TextInput, Button, Pressable, Keyboard } from 'react-native';
import style from './style';

export const AddUser = ({ navigation }) => {
  const [ nome, setNome ] = useState('');
  const [ telefone, setTelefone ] = useState('');
  const [ data, setData ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ senha, setSenha ] = useState('');

  return (
    
    <Pressable style={style.container} onPress={Keyboard.dismiss} >
      <Text style={style.label}>Digite seu nome completo:</Text>
      <TextInput placeholder='Nome completo' style={style.input} onChange={(event) => setNome(event.nativeEvent.text)} value={nome} />
      <Text style={style.label}>Digite seu telefone:</Text>
      <TextInput placeholder='Telefone' style={style.input} onChange={(event) => setTelefone(event.nativeEvent.text)} value={telefone} />
      <Text style={style.label}>Digite sua data de nascimento:</Text>
      <TextInput placeholder='Data de nascimento' style={style.input} onChange={(event) => setData(event.nativeEvent.text)} value={data} />
      <Text style={style.label}>Digite seu e-mail:</Text>
      <TextInput placeholder='E-mail' style={style.input} onChange={(event) => setEmail(event.nativeEvent.text)} value={email} />
      <Text style={style.label}>Digite sua senha:</Text>
      <TextInput placeholder='Senha' style={[style.input, style.lastInput]} onChange={(event) => setSenha(event.nativeEvent.text)} value={senha} />

      <Button
        title='Cadastrar novo Usuário'
      />
    </Pressable>
  )
};

export default AddUser;
