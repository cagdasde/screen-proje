import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FirstScreen = () => {
  return (
    <SafeAreaView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#9e236a', '#071e3b']}
        style={styles.linearGradient}>
        <View>
          <Text style={styles.lets}>Lets follow each other</Text>
        </View>
        <View style={styles.list}>
          <Text style={styles.before}>Before we start, here some infos</Text>
          <Text style={styles.listItem}>
            Anyone can unfollow, we do not guarantee
          </Text>
          <Text style={styles.listItem}>Followback may take 72 hours</Text>
          <Text style={styles.listItem}>100 % Secure Login.</Text>
          <Text style={styles.listItem}>0 Risk policy</Text>
        </View>
        <View style={styles.login}>
          <Text style={styles.loginText}>Login with Instagram</Text>
        </View>
        <View style={styles.social}>
          <Text style={styles.socialItem}>Rate</Text>
          <Text style={styles.socialItem}>Share</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
FirstScreen.navigationOptions = () => {
  return {
    header: <View style={{margin: 0}} />,
  };
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 700,
  },
  lets: {
    marginBottom: 30,
    marginTop: 30,
    textAlign: 'center',
    height: 25,
    opacity: 0.5,
    fontFamily: 'Avenir',
    fontSize: 20,
    letterSpacing: 0.64,
    color: '#ffffff',
  },

  list: {
    height: 304,
    opacity: 0.6,
    borderRadius: 8,
    backgroundColor: '#0a1e3c',
    textAlign: 'center',
    alignContent: 'center',
    marginHorizontal: 20,
  },
  before: {
    fontSize: 25,
    textAlign: 'center',
    color: '#ffffff',
    letterSpacing: 0.5,
    marginHorizontal: 80,
    marginTop: 15,
    fontFamily: 'Avenir',
    lineHeight: 40,
  },
  listItem: {
    textAlign: 'left',
    color: '#ffffff',
    fontSize: 18,
    marginHorizontal: 40,
    letterSpacing: 0.9,
    fontFamily: 'Avenir',
    lineHeight: 40,
  },
  login: {
    height: 50,
    borderRadius: 120,
    backgroundColor: '#872363',
    marginTop: 80,
    marginHorizontal: 20,
    alignContent: 'center',
  },
  loginText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Avenir',
    letterSpacing: 1.57,
    marginBottom: 8,
    marginTop: 10,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  socialItem: {
    color: '#288be7',
    fontSize: 18,
    fontFamily: 'Avenir',
    letterSpacing: 0.8,
  },
});

export default FirstScreen;
