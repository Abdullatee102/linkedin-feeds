
import { Stack } from 'expo-router';

const RootLayout = () => {

  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(tabs)"/>
        <Stack.Screen name="(home)" />
        <Stack.Screen name="(settings)" />

    </Stack>
  );

};

export default RootLayout;