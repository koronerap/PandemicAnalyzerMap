import HomeScreen from './screens/Home';
import NewsScreen from './screens/News';
import AuthScreen from './screens/Auth';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="News" component={NewsScreen} options={{ title: "News" }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
