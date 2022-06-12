import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, Linking, TouchableOpacity } from 'react-native';
import { NativeScreen, NativeScreenContainer, NativeScreenNavigationContainer, ScreenStack } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Bg from './src/pages/Bhagavad Gita';
import SrimadBhagavatam from './src/pages/Srimad Bhagavatam';
import ChaitanyaCharitamrta from './src/pages/Chaitanya Charitamrta';
import KrsnaBook from './src/pages/Krsna Book';
import Bhagavad_Gita_Verses from './src/pages/Bhagavad_Gita_Verses';
const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Bhagavad Gita" component={Bg} />
      <Stack.Screen name="Srimad Bhagavatam" component={SrimadBhagavatam} />
      <Stack.Screen name="Chaitanya Charitamrta" component={ChaitanyaCharitamrta} />
      <Stack.Screen name="Krsna Book" component={KrsnaBook} />
      <Stack.Screen name='Bhagavad_Gita_Verses' component={Bhagavad_Gita_Verses} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  image: {
    borderRadius: 30,
    marginTop: 10
  }
});
