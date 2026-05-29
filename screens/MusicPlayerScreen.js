import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useAudioPlayer } from 'expo-audio'; // Handles native audio streams perfectly
import { styles } from '../navigation/TabNavigator'; 

export default function MusicPlayerScreen() {
  // 1. Your updated music catalog array
  const Tracks = [
    { 
      name: 'Lo-Fi Chill Beats', 
      artist: 'Lofi Coffee', 
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000' 
    },
    { 
      name: 'Acoustic Sunrise', 
      artist: 'Guitar Dreams', 
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', 
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000' 
    },
    { 
      name: 'Synthwave Night Drive', 
      artist: 'Retro Beats', 
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', 
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000' 
    },
  ];

  // State to manage which track index is currently active
  const [currentTrackUrl, setCurrentTrackUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize the Expo Audio hook pointing to the active track URL
  const player = useAudioPlayer(currentTrackUrl);

  // Keep track of playback states (Play / Pause toggle logic)
  const handlePlayPause = async (trackUrl) => {
    // Case 1: Tapping a completely new song
    if (currentTrackUrl !== trackUrl) {
      setCurrentTrackUrl(trackUrl);
      setIsPlaying(true);
      // Wait for player state configuration to finish, then trigger play
      setTimeout(() => player.play(), 200); 
    } 
    // Case 2: Tapping the song that is already active (Toggle)
    else {
      if (isPlaying) {
        player.pause();
        setIsPlaying(false);
      } else {
        player.play();
        setIsPlaying(true);
      }
    }
  };

  // Clean up player on screen unmount
  useEffect(() => {
    return () => {
      if (player) player.release();
    };
  }, [player]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Your Daily Music Playlist</Text>
      
      {Tracks.map((item, index) => {
        const isCurrentSong = currentTrackUrl === item.url;
        const isThisPlaying = isCurrentSong && isPlaying;

        return (
          <View key={index} style={styles.itemContainer}>
            {/* Track Album Art */}
            <Image source={{ uri: item.image }} style={styles.image} />
            
            <View style={styles.details}>
              {/* Track Info */}
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.artist}</Text>
              
              {/* Playback Control Button */}
              <TouchableOpacity
                style={[
                  styles.button, 
                  { backgroundColor: isThisPlaying ? '#ff4d4d' : '#1DB954' } // Dynamic color toggle
                ]}
                onPress={() => handlePlayPause(item.url)}
              >
                <Text style={styles.buttonText}>
                  {isThisPlaying ? '⏸️ Pause' : '▶️ Play Track'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}