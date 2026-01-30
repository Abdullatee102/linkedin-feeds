

import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ViewMore } from '../../components/viewmore';
import { Post } from '../../components/post';
import { Img } from '../../components/images';
import { router } from 'expo-router';



const posts = [
  {
    id: '1',
    profileImage: "https://randomuser.me/api/portraits/men/36.jpg",
    name: "Daniel Afolabi",
    timestamp: "2h ago",
    content: "Just finished a great workout session! Feeling energized and ready to take on the day.",
    image: require('../../assets/images/image1.jpg'),
  },
  {
    id: '2',
    profileImage: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Abdullateef Opeyemi",
    timestamp: "1h ago",
    content: "Excited to announce that I've started a new position at TechCrush! Looking forward to this new chapter as it brings to my growth and learning experience in my tech journey.",
    image: require('../../assets/images/myscholarship.jpg')
  },
  {
    id: '3',
    profileImage: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Mike Johnson",
    timestamp: "5h ago",
    content: "Had an amazing time at the conference today. Met so many inspiring people!",
    image: require('../../assets/images/image2.jpg'),
  },
  {
    id: '4',
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Emily Davis",
    timestamp: "6h ago",
    content: "Just published a new blog post on my website. Check it out for tips on productivity!",
    image: { uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" }
  },
  {
    id: '5',
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Chris Brown",
    timestamp: "8h ago",
    content: "Loving the new features in React Native! Building mobile apps has never been easier.",
  },
  {
    id: '6',
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg", 
    name: "Sarah Wilson",
    timestamp: "10h ago",
    content: "Had a productive day at work. Looking forward to the weekend!",
  },
  {
    id: '7',
    profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "David Lee",
    timestamp: "12h ago",
    content: "Just completed a marathon! Feeling accomplished and proud.",
    image: require('../../assets/images/image4.jpg'),
 
  },
  {
    id: '8',
    profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Laura Martinez",
    timestamp: "14h ago",
    content: "Excited to share that I've been promoted to Senior Manager at my company!"
  },
  {
    id: '9',
    profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "James Anderson",
    timestamp: "16h ago",
    content: "Just returned from an amazing trip to the mountains. Nature is truly breathtaking.",
  },
  {
    id: '10',
    profileImage: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "William Davies",
    timestamp: "18h ago",
    content: "Had a fantastic time volunteering at the local shelter today. Giving back feels great!",
    image: require('../../assets/images/image6.jpg'),

  },
];

const HomePage = () => {
   const [visibleCount, setVisibleCount] = useState(5);

  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + 5);
  };

  const hasMorePosts = visibleCount < posts.length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 15, backgroundColor: '#fff', color:'rgb(101, 101, 238)',}}>Welcome to the Home Screen</Text>
      </View>
      <FlatList
        data={posts.slice(0, visibleCount)}
        keyExtractor={(item) => item.id}
        
        ListHeaderComponent={<Img />} 
        
        ListFooterComponent={
          hasMorePosts ? <ViewMore onPress={handleViewMore} /> : null
        }
        
        renderItem={({ item }) => (
          <Post
            image={item.image}
            profileImage={item.profileImage}
            name={item.name}
            time={item.timestamp} 
            text={item.content}   
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      />

      <Pressable onPress ={() => {router.push('../(home)/options')}} >
          <Text style={{ padding: 10, backgroundColor: 'rgb(101, 101, 238)', margin: 20, borderRadius: 8, color: 'white', fontSize: 16, textAlign: 'center' }}> Go to Options</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f2ef', 
  },
  scrollViewContent: {
    paddingBottom: 30, 
  },
});

export default HomePage;