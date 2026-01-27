
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabsLayout = () => {
  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#0a66c2',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { paddingBottom: 5, height: 60  },
      }}>

      <Tabs.Screen name="home" 
        options={{
          title: 'home',
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />
        }}/>

      <Tabs.Screen name="settings"
        options={{ 
          title: 'settings',
          color: "black",
          tabBarIcon: () => <MaterialCommunityIcons name="post" size={24} color="black" />
        }} />

      <Tabs.Screen name="profile"/>

    </Tabs>
  );
}

export default TabsLayout;