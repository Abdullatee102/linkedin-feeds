import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { CustomButton } from '../components/button';

export default function OnboardingScreen() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      image: require('../assets/images/onboard1.png'),
      title: 'Tired of applying and hearing nothing?',
      description: 'Most job seekers never get a response. We are here to change that.',
      indicator: require('../assets/images/middlebar1.png'),
    },
    {
      image: require('../assets/images/onboard2.png'),
      title: 'Get matched by your actual skills',
      description: 'Take a quick skill test, get a real job-fit score and stand out',
      indicator: require('../assets/images/middlebar2.png'),
    },
    {
      image: require('../assets/images/onboard3.png'),
      title: 'Know exactly where you stand',
      description: 'Real-time updates at every stage. No more guessing. No more ghosting.',
      indicator: require('../assets/images/middlebar3.png'),
    },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      router.push('/home');
    }
  };

  const handleSkip = () => {
    router.push('/home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image source={pages[currentPage].image} style={styles.mainImage} resizeMode="contain" />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{pages[currentPage].title}</Text>
        <Text style={styles.description}>{pages[currentPage].description}</Text>
        
        <Image source={pages[currentPage].indicator} style={styles.indicatorImage} resizeMode="contain" />

        <CustomButton 
          title={currentPage === pages.length - 1 ? 'Get Started' : 'Next'} 
          onPress={handleNext} 
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  header: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  skipText: { 
    color: '#666', 
    fontSize: 14 
  },
  imageContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: { 
    width: '85%', 
    height: '80%' 
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A1A1A',
    marginBottom: 12,
    lineHeight: 28,
    fontFamily: 'PlayfairDisplay-Bold',

  },
  /*title: {
    width: 409,
    height: 86,
    top: 0,
    fontFamily: 'Playfair Display',
    fontStyle: 'normal',
    fontSize: 32,
    lineHeight: 43,
    alignItems: 'center',
    textAlign: 'center',
    color: '#000',
  },*/
  description: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  indicatorImage: {
    width: 60,
    height: 10,
    marginBottom: 10,
  },
});