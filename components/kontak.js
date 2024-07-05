import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;

const friends = [
  // Data teman-teman
  {
    gambar: require('../assets/memei.jpg'),
    judul: 'Meitiasari Nurlatifah',
    telpon: '085892775764',
    email: 'memey.icloud@gmail.com',
    alamat: 'jln pelda suryanta',
    gender: 'Female',
    prodi: 'Teknik Informatika',
  },
  {
    gambar: require('../assets/nanat.jpg'),
    judul: 'Natya Octaviana',
    telpon: '085721884434',
    email: 'natyaoctaviana@gmail.com',
    alamat: 'jl gunung karang kp liung tutut Rt 02/Rw09',
    gender: 'Female',
    prodi: 'Teknik Informatika',
  },
  {
    gambar: require('../assets/agung.jpg'),
    judul: 'Agung Bahtiar',
    telpon: '087772243468',
    email: 'Aljabarbara2@gmail.com',
    alamat: 'jln karamat',
    gender: 'Male',
    prodi: 'Teknik Informatika',
  },
  {
    gambar: require('../assets/faisal.jpg'),
    judul: 'Faisal Triaputra',
    telpon: '081280230924',
    email: 'faisal.artupairt28@gmail.com',
    alamat: 'Jl. Pasir Makmur',
    gender: 'Male',
    prodi: 'Teknik Informatika',
  },
  {
    gambar: require('../assets/dani.jpg'),
    judul: 'Dani Akhmad Maulana',
    telpon: '085219971516',
    email: 'dakhmad140104@gmail.com',
    alamat: 'jJl. Pelda Suryanta No.07 Kelurahan Nanggeleng Kecamatan Citamiang',
    gender: 'Male',
    prodi: 'Teknik Informatika',
  },
  {
    gambar: require('../assets/shinta.jpg'),
    judul: 'Shinta Septiani',
    telpon: '0895364674571',
    email: 'shintasptni@gmail.com',
    alamat: 'Benteng Tengah Gg.Famili',
    gender: 'Female',
    prodi: 'S1 Perawat',
  },
  {
    gambar: require('../assets/rafi.jpg'),
    judul: 'Rafi Maulana Putra',
    telpon: '085723345631',
    email: 'rafimaul82@gmail.com',
    alamat: 'Kp.cirumput RT.05/04 des. Selaawi kec Sukaraja',
    gender: 'Male',
    prodi: 'Teknik Informatika',
  },
  {
    gambar: require('../assets/nisa.jpg'),
    judul: 'Nisa Aguatianti',
    telpon: '081298674541',
    email: 'nisaagustianti90@gmail.com',
    alamat: 'Jl Letda T Asmita, Kp.Tonjong, Rt.001/Rw.002, Kec. Citamiang, Kel.Gedong Panjang',
    gender: 'Female',
    prodi: 'Manajemen',
  },
  {
    gambar: require('../assets/zakia.jpg'),
    judul: 'Zakia Zaharani',
    telpon: '085798204923',
    email: 'zakiazaharani29@gmail.com',
    alamat: 'Jl. Pemandian cigunung Desa. Sukaresmi Kec. Cisaat',
    gender: 'Female',
    prodi: 'S1 Perawat',
  },
  {
    gambar: require('../assets/esanda.jpg'),
    judul: 'Esanda Fatimah A',
    telpon: '085795381719',
    email: 'esandafatimah279@gmail.com',
    alamat: 'Jl. Goalpara, Kp. Nagrak Rt02/08',
    gender: 'Female',
    prodi: 'S1 Perawat',
  },
  {
    gambar: require('../assets/rani.jpg'),
    judul: 'Rani Febriani',
    telpon: '085846664256',
    email: 'ranifebriani2724@gmail.com',
    alamat: 'Kp.Bedeng II',
    gender: 'Female',
    prodi: 'Teknik Informatika',
  },
];

const Kontak = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredFriends = useMemo(() => {
    return friends.filter(friend =>
      friend.judul.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const countByGender = useMemo(() => {
    const counts = friends.reduce((acc, friend) => {
      acc[friend.gender] = (acc[friend.gender] || 0) + 1;
      return acc;
    }, {});
    return counts;
  }, [friends]);

  const handlePress = (friend) => {
    navigation.navigate('Detail', { friend });
  };

  return (
    <LinearGradient colors={['#add8e6', '#ffb6c1', '#ffffff']} style={styles.container}>
      <Text style={styles.title}>Daftar Teman</Text>
      <Text style={styles.genderCount}>
        Jumlah Teman Laki-laki: {countByGender['Male'] || 0}
      </Text>
      <Text style={styles.genderCount}>
        Jumlah Teman Perempuan: {countByGender['Female'] || 0}
      </Text>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search friend by name..."
      />
      <FlatList
        data={filteredFriends}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handlePress(item)}>
            <Image source={item.gambar} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.judul}</Text>
              <Text style={styles.detail}>Tap for more details</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.flatlistContent}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textShadowColor: '#aaa',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  genderCount: {
    fontSize: 20,
    marginBottom: 10,
    color: '#333',
    textShadowColor: '#aaa',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  searchInput: {
    width: windowWidth - 40,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 20,
    elevation: 3, // For shadow on Android
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#ffffffaa', // Slightly transparent white
    padding: 20,
    marginBottom: 15,
    borderRadius: 15,
    width: windowWidth - 40,
    alignItems: 'center',
    elevation: 2, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textShadowColor: '#aaa',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  detail: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
    fontStyle: 'italic', // Add italic style for a different look
  },
  flatlistContent: {
    alignItems: 'center',
    paddingBottom: 20,
  },
});

export default Kontak;
