// ResetPasswordScreen.jsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ResetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleResetPassword = () => {
    // Implement your password reset logic here
    // You can use the 'email' state to get the user's email
    // For example, send a reset password link to the provided email
    // Display a success message or error based on the response
  };

  return (
    <View style={styles.container}>

        <View style={styles.Imgcontainer}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/ucc.png')}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{"University of \n Cape Coast"}</Text>
            </View>
        </View>

      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <AntDesign name="back" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>Password Reset</Text>
        <Text style={styles.subtitle}>
          Enter your email address below to receive a password reset link.
        </Text>
        <Text style={{fontWeight: 700, fontSize: 16, marginBottom: 5, marginLeft: 12,}}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
          <Text style={styles.resetButtonText}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text onPress={handleGoBack} style={{textAlign: 'center', fontSize: 15, fontWeight: 500, color: '#4A88C2'}}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },

  Imgcontainer: {
    flexDirection: 'row', // Align children horizontally
    padding: 16,
    marginTop: 80,
    // alignContent: "center",
    marginLeft: 28,
  },

//   logoContainer: {
//     // flex: 1, // Take 1/3 of the available space
//     alignItems: 'flex-start', // Align items to the start (left)
//   },

  logo: {
    width: 81,
    height: 109,
    // margin: 40,
    // marginBottom: -10,
},

textContainer: {
    // flex: 2, // Take 2/3 of the available space
    // justifyContent: 'center', // Center text vertically
    // alignItems: 'flex-start', // Align text to the start (left)
    textAlign: "center"
  },

  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20,
},


  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginTop: 50,
    // alignItems: 'center',
    elevation: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#042B50',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 50,
    color: '#555',
  },

  input: {
    width: 300,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 50,
    marginLeft: 12,
  },

  resetButton: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 12,
    width: '50%',
    alignItems: 'center',
    marginLeft: 75,
    marginBottom: 20,
  },

  resetButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ResetPasswordScreen;
