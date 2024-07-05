import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#add8e6', '#ffb6c1', '#ffffff']}  // Warna gradien: biru muda, pink muda, putih
      style={styles.container}
    >
      <Text style={styles.title}>Welcome to APK Daftar Teman</Text>
      <Text style={styles.subtitle}>Kontak Friends Dian Sela TI-4A </Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Go to Kontak MyFriends" 
          onPress={() => navigation.navigate('Kontak MyFriend')} 
          color="#6200ea" 
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#666',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
});

export default Home;
