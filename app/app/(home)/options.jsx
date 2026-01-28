import { Text, View, Pressable} from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { router } from 'expo-router';

const Options = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 15, backgroundColor: '#fff', color:'rgb(101, 101, 238)',}}>Welcome to the Options Screen</Text>
            </View>
            <Pressable onPress ={() => {router.back()}} >
                <Text style={{ padding: 15, backgroundColor: 'rgb(101, 101, 238)', margin: 15, borderRadius: 8, color: 'white', fontSize: 16, textAlign: 'center' }}> Go Back</Text>
            </Pressable>
        </SafeAreaView>
    );
};

export default Options;