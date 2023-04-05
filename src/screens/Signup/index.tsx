import { useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from 'react-native';

export default function SignUp() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = () => {
    if (!name || !email || !password) {
      alert('Por favor, preencha os campos');
    } else {
      alert('Acesso liberado');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <KeyboardAvoidingView behavior='position'>
        <>
          <View>
            <TextInput
              placeholder='Digite seu nome'
              onChangeText={(t) => setName(t)}
              style={{
                borderWidth: 1,
                height: 40,
                width: 200,
                borderRadius: 10,
              }}
            />
            <TextInput
              placeholder='Digite seu email'
              onChangeText={(t) => setEmail(t)}
              style={{
                borderWidth: 1,
                height: 40,
                width: 200,
                borderRadius: 10,
                marginVertical: 10,
              }}
            />
            <TextInput
              placeholder='Digite sua senha'
              onChangeText={(t) => setPassword(t)}
              style={{
                borderWidth: 1,
                height: 40,
                width: 200,
                borderRadius: 10,
                marginBottom: 20,
              }}
            />
            <Button title='Registrar' onPress={handleSubmit} />
          </View>
        </>
      </KeyboardAvoidingView>
    </View>
  );
}
