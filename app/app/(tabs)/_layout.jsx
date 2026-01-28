
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

const TabsLayout = () => {
  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#00f',
        tabBarActiveTintColor: '#fff',
        tabBarStyle: { 
          backgroundColor: '#000',
          height: 70,
          marginBottom: 20,
          marginHorizontal: 30,
          borderRadius: 80,
         },
        tabBarIconStyle: { marginTop: 10}
      }}>

      <Tabs.Screen name="home" 
        options={{
          title: 'home',
          tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} />
        }}/>

      <Tabs.Screen name="mynetwork"
        options={{ 
          title: 'my network',
          tabBarIcon: ({color}) => <Entypo name="network" size={24} color={color} />
        }} />

      <Tabs.Screen name="notifications"
        options={{
          title: 'notifications',
          tabBarIcon: ({color}) => <Ionicons name="notifications" size={24} color={color} />
        }} />

      <Tabs.Screen name="jobs"
        options={{
          title: 'jobs',
          tabBarIcon: ({color}) => <AntDesign name="inbox" size={24} color={color} />
        }} />

    </Tabs>
  );
}

export default TabsLayout;