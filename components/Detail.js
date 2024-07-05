import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, Linking, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Detail = ({ route, navigation }) => {
  const { friend } = route.params;
  const [callStatus, setCallStatus] = useState('idle'); // State untuk menyimpan status panggilan

  const makeCall = useCallback((number) => {
    setCallStatus('calling'); // Mengubah status panggilan menjadi 'calling'
    Linking.openURL(`tel:${number}`);
  }, []);

  return (
    <LinearGradient colors={['#add8e6', '#ffb6c1', '#ffffff']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={friend.gambar} style={styles.image} />
        <Text style={styles.name}>{friend.judul}</Text>
        <Text style={styles.infoText}>Phone: {friend.telpon}</Text>
        <Text style={styles.infoText}>Email: {friend.email}</Text>
        <Text style={styles.infoText}>Address: {friend.alamat}</Text>
        <Text style={styles.infoText}>Gender: {friend.gender}</Text>
        <Text style={styles.infoText}>Prodi: {friend.prodi}</Text>
        <TouchableOpacity style={styles.callButton} onPress={() => makeCall(friend.telpon)}>
          <Text style={styles.callButtonText}>
            {callStatus === 'idle' ? `Call ${friend.judul}` : 'Calling...'}
          </Text>
        </TouchableOpacity>
        <Button title="Go Back to Home" onPress={() => navigation.navigate('Home')} />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  callButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  callButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Detail;
