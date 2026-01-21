
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const Post = ({ profileImage, name, time, text, image }) => {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 100)); // Mock data

  const toggleExpanded = () => setExpanded(!expanded);
  const toggleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  // handles both local and remote images;
  const postImageSource = typeof image === 'number' ? image : (image?.uri ? { uri: image.uri } : null);

  return (
    <View style={styles.postContainer}>

      <View style={styles.postHeader}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.timestamp}>{time}</Text>
        </View>
      </View>


      <Text style={styles.postContent}>
        {expanded ? text : text.length > 70 ? text.substring(0, 70) + '...' : text}
      </Text>
      
      {text.length > 70 && (
        <TouchableOpacity onPress={toggleExpanded} style={styles.viewMoreTouch}>
          <Text style={styles.viewMoreText}>{expanded ? "See less" : "See more"}</Text>
        </TouchableOpacity>
      )}


      {image && (
        <Image 
          source={postImageSource} 
          style={styles.postImage} 
          resizeMode="cover"
        />
      )}


      <View style={styles.statsRow}>
        <Text style={styles.statsText}>{likeCount} Likes</Text>
      </View>

      <View style={styles.divider} />


      <View style={styles.actionRow}>
        <TouchableOpacity onPress={toggleLike} style={styles.actionButton}>
          <Text style={[styles.actionText, liked && { color: '#007bff' }]}>
            {liked ? '❤️ Liked' : '🤍 Like'}
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>💬 Comment</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>↗️ Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    paddingTop: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 3,
  },
  postHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 15, 
    marginBottom: 10 
  },
  profileImage: { 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginRight: 10 
  },
  name: { 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  timestamp: { 
    color: '#666', 
    fontSize: 12 
  },
  postContent: { 
    fontSize: 14, 
    paddingHorizontal: 15, 
    color: '#333', 
    lineHeight: 20 
  },
  viewMoreTouch: { 
    paddingHorizontal: 15, 
    marginBottom: 10 
  },
  viewMoreText: { 
    color: '#666', 
    fontWeight: '600' 
  },
  postImage: { 
    width: '100%', 
    height: 300, 
    marginTop: 5 
  },
  statsRow: { 
    padding: 10, 
    paddingHorizontal: 15 
  },
  statsText: { 
    color: '#666', 
    fontSize: 12 
  },
  divider: { 
    height: 1, 
    backgroundColor: '#eee', 
    marginHorizontal: 15 
  },
  actionRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingVertical: 10 
  },
  actionButton: { 
    padding: 5 
  },
  actionText: { 
    fontWeight: '600', 
    color: '#666' 
  }
});