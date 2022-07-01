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
      <Text style={style.label}>Nome completo</Text>
      <TextInput style={style.input} onChange={(event) => setNome(event.nativeEvent.text)} value={nome} />
      <Text style={style.label}>Telefone</Text>
      <TextInput style={style.input} onChange={(event) => setTelefone(event.nativeEvent.text)} value={telefone} />
      <Text style={style.label}>Data Nascimento</Text>
      <TextInput style={style.input} onChange={(event) => setData(event.nativeEvent.text)} value={data} />
      <Text style={style.label}>E-mail</Text>
      <TextInput style={style.input} onChange={(event) => setEmail(event.nativeEvent.text)} value={email} />
      <Text style={style.label}>Senha</Text>
      <TextInput style={[style.input, style.lastInput]} onChange={(event) => setSenha(event.nativeEvent.text)} value={senha} />

      <Button
        title='Cadastrar'
      />
    </Pressable>
  )
};

export default AddUser;
