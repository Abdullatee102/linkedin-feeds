
import { View, Text, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 15, backgroundColor: '#fff', color:'rgb(101, 101, 238)',}}>Welcome to the Home Screen</Text>
      </View>
      <Pressable 
         onPress={ () => router.push('../options') }
         style={{ padding: 10, backgroundColor: 'rgb(101, 101, 238)', marginHorizontal: 80, marginBottom: 20,borderRadius: 8 }}>
        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}> Go to Options</Text>
      </Pressable>
    </SafeAreaView>
  );
}; 

export default Home;