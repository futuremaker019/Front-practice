import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import LogInScreen from './screens/LogIn';
import DetailScreen from './screens/AssetDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LogInScreen} options={{title: 'SIMMS'}}/>
        <Stack.Screen name='Details' component={DetailScreen} options={{title: 'SIMMS'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;