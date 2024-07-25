import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMedia } from '../../store/mediaSlice';

const MediaGallery = () => {
  const dispatch = useDispatch();
  const media = useSelector(state => state.media.media);

  return (
    <View style={styles.container}>
      {media.map((item, index) => (
        <View key={index} style={styles.mediaItem}>
          {item.type === 'image' ? (
            <Image source={{ uri: item.url }} style={styles.image} />
          ) : (
            <Video source={{ uri: item.url }} style={styles.video} />
          )}
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => dispatch(deleteMedia(item.id))}>
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mediaItem: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  video: {
    width: '100%',
    height: 200,
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  },
  deleteText: {
    color: 'white',
  },
});

export default MediaGallery;
