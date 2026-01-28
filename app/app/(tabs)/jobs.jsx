
import { View, Text} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
    
const Jobs = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 15, backgroundColor: '#fff', color:'#00f',}}>Welcome to the Jobs Screen</Text>
        <Text style={{ fontSize: 16, padding: 15, color: '#000' }}> Technical setup loading.... Jobs will appear here soon.</Text>
      </View>
    </SafeAreaView>
  );
};

export default Jobs;