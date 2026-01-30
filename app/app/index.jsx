import { StyleSheet, Text, View, Image, Pressable, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function LinkedInPageLogin() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 15, backgroundColor: '#fff', color:'rgb(101, 101, 238)',}}>Welcome to LinkedIn Login Screen</Text>
        
        <Image
          source={require('../assets/images/linkedin.jpg')}
          style={{ width: 200, height: 200, marginVertical: 20 }}
        />

        <TextInput
          placeholder="Enter your email"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your password"
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginVertical: 10 }}> Login</Text>
        <Text style={{ fontSize: 14, color: 'blue', marginVertical: 10 }}> Forget Password?</Text>

        <Pressable onPress ={() => {router.push('../(tabs)/home')}} 
        style={{ padding: 10, backgroundColor: 'rgb(101, 101, 238)', margin: 30, borderRadius: 8 }}>
          <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}> Go to Home</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f2ef', 
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
