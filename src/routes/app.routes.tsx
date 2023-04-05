import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from '../screens/Signup';

const AppStack = createNativeStackNavigator();

export default function AppRoute() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AppStack.Screen name='SignUp' component={SignUp} />
    </AppStack.Navigator>
  );
}
