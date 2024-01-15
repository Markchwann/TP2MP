import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  // Gantilah 'YOUR_GOOGLE_MAPS_API_KEY' dengan kunci API Google Maps Anda
  const apiKey = 'AIzaSyDT2Ok2qc3TAlJV_fPkCa_ax29MyihUIo4';

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -0.31429552618827383, // Ganti dengan koordinat latitude lokasi awal
          longitude: 100.38477220970988, // Ganti dengan koordinat longitude lokasi awal
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // Masukkan kunci API Google Maps di bawah ini
        provider={MapView.PROVIDER_GOOGLE}
        customMapStyle={[]}
        showsUserLocation={true}
        showsMyLocationButton={true}
        zoomControlEnabled={true}
        scrollEnabled={true}
        rotateEnabled={true}
        // Masukkan kunci API Google Maps di bawah ini
        apiKey={apiKey}
      >
        {/* Tambahkan Marker untuk menandai lokasi pada peta */}
        <Marker
          coordinate={{
            latitude: -0.31429552618827383, // Ganti dengan koordinat latitude lokasi
            longitude: 100.38477220970988, // Ganti dengan koordinat longitude lokasi,
          }}
          title="Lokasi"
          description="SMAN 3 Bukittinggi"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  map: {
    flex: 1,
  },
});

export default Map;
