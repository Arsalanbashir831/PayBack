import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { Camera } from 'expo-camera';
import TopHeader from '@/components/common/Header';
import { Camera } from 'expo-camera';

const { width } = Dimensions.get('window');
const FRAME_SIZE = width * 0.8;

const QRscan = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [loading, setLoading] = useState(true);  // Loading state for better UX

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      setLoading(false); // Permissions are loaded
    })();
  }, []);

  // Show loading while permissions are being checked
  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  // No permission to access the camera
  if (hasPermission === false) {
    return (
      <View style={styles.centered}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopHeader title="QR SCAN" />

      {/* Camera View */}
      <View style={styles.cameraContainer}>
        {/* <Camera style={styles.camera}>
       
        </Camera> */}

        <View style={styles.scannerFrameContainer}>
            <View style={styles.scannerFrame}>
              <Text style={styles.scanText}>Scan</Text>
            </View>
          </View>
      </View>

      {/* Input / Manual Entry Button */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enter ID</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  scannerFrameContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scannerFrame: {
    width: FRAME_SIZE,
    height: FRAME_SIZE,
    borderWidth: 2,
    borderColor: '#FFB800',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  scanText: {
    color: '#FFB800',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QRscan;
