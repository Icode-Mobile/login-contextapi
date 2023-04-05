import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import RootRoutes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='dark' backgroundColor='#fff' translucent />
      <RootRoutes />
    </NavigationContainer>
  );
}
