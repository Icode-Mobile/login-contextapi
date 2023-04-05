import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';

const AuthStack = createNativeStackNavigator();

export default function AuthRoute() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name='Home' component={Home} />
    </AuthStack.Navigator>
  );
}
