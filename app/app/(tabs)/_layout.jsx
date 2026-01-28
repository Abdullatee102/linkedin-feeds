
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const TabsLayout = () => {
  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1b83eb',
        tabBarInactiveTintColor: '#d69c9c',
        tabBarStyle: { 
          backgroundColor: 'darkblue',
          borderTopColor: 'transparent',
          height: 70,
          marginBottom: 20,
          marginHorizontal: 30,
          borderRadius: 44,
         },
        tabBarIconStyle: { marginTop: 10}
      }}>

      <Tabs.Screen name="home" 
        options={{
          title: 'home',
          tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} />
        }}/>

      <Tabs.Screen name="settings"
        options={{ 
          title: 'settings',
          tabBarIcon: ({color}) => <MaterialCommunityIcons name="post" size={24} color={color} />
        }} />

      <Tabs.Screen name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({color}) => <AntDesign name="user" size={24} color={color} />
        }} />

    </Tabs>
  );
}

export default TabsLayout;