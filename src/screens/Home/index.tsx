import { Text, View, Button } from 'react-native';

export default function Home() {
  let user = {
    id: 'gffdgfbthyegbrvet237gwerqsxdgjhk1-cds ',
    name: 'Caio Cosenza',
    email: 'caio@gmail.com',
  };

  const handleSignout = () => {
    alert('Sair da conta');
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
      <Text> LOGADO </Text>
      <Text style={{ fontWeight: 'bold', color: 'red' }}> {user.name} </Text>
      <Button title='Sair' onPress={handleSignout} />
    </View>
  );
}
