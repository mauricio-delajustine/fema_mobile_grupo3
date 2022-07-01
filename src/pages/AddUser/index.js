import React, { useState } from 'react';
import { Text, TextInput, Button, Pressable, Keyboard } from 'react-native';
import style from './style';


export const AddContact = ({ navigation }) => {
  const [ nome, setNome ] = useState('');
  const [ telefone, setTelefone ] = useState('');
  const [ endereco, setEndereco ] = useState('');
  const [ numero, setNumero ] = useState('');
  const [ profissao, setProfissao ] = useState('');

  return (
    <Pressable style={style.container} onPress={Keyboard.dismiss} >
      <Text style={style.label}>Nome</Text>
      <TextInput style={style.input} onChange={(event) => setNome(event.nativeEvent.text)} value={nome} />
      <Text style={style.label}>Telefone</Text>
      <TextInput style={style.input} onChange={(event) => setTelefone(event.nativeEvent.text)} value={telefone} />
      <Text style={style.label}>Endereço</Text>
      <TextInput style={style.input} onChange={(event) => setEndereco(event.nativeEvent.text)} value={endereco} />
      <Text style={style.label}>Número</Text>
      <TextInput style={style.input} onChange={(event) => setNumero(event.nativeEvent.text)} value={numero} />
      <Text style={style.label}>Profissão</Text>
      <TextInput style={[style.input, style.lastInput]} onChange={(event) => setProfissao(event.nativeEvent.text)} value={profissao} />

      <Button
        title='Cadastrar'
      />
    </Pressable>
  )
};

export default AddContact;
