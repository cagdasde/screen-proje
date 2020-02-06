import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SettingsScreen = ({navigation}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#9e236a', '#071e3b']}
      style={styles.linearGradient}>
      <View>
        <Image style={styles.user} source={require('../image/cagdas.jpg')} />
      </View>
      <Text style={styles.userText}>Username</Text>

      <View>
        <View>
          <Image style={styles.kupa} source={require('../image/kupa.png')} />
          <Text style={styles.count}>+1000</Text>
          <Text style={styles.socialItem}>Credits</Text>
        </View>
        <View style={styles.follow}>
          <View>
            <Text style={styles.count}>1000</Text>
            <Text style={styles.socialItem}>Following</Text>
          </View>
          <View>
            <Text style={styles.count}>1000</Text>
            <Text style={styles.socialItem}>Follow Backs</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomLine} />
      <View style={styles.listCheck}>
        <Text style={styles.listText}>Category</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Category')}>
          <Image
            // eslint-disable-next-line react-native/no-inline-styles
            style={{marginRight: 15}}
            source={require('../image/rightarrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLine} />
      <View style={styles.listCheck}>
        <Text style={styles.listText}>Language</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Category')}>
          <Image
            // eslint-disable-next-line react-native/no-inline-styles
            style={{marginRight: 15}}
            source={require('../image/rightarrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomLine} />
      <View style={styles.login}>
        <Text style={styles.loginText}>Logout</Text>
      </View>
      <View style={styles.follow}>
        <Text style={styles.socialItem}>Rate</Text>
        <Text style={styles.socialItem}>Share</Text>
      </View>
    </LinearGradient>
  );
};
SettingsScreen.navigationOptions = ({navigation}) => {
  return {
    header: (
      <View style={styles.lists}>
        <TouchableOpacity onPress={() => navigation.navigate('Index')}>
          <Image
            style={styles.square}
            source={require('../image/leftarrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.list}>Settings</Text>
      </View>
    ),
  };
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 700,
  },
  lists: {
    backgroundColor: '#40204d',
    flexDirection: 'row',
  },
  list: {
    backgroundColor: '#40204d',
    height: 80,
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    letterSpacing: 1.13,
    fontFamily: 'Avenir',
  },
  listCheck: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 10,
  },

  listText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    letterSpacing: 1.5,
    fontFamily: 'Avenir',
    lineHeight: 30,
  },
  bottomLine: {
    height: 0.5,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    marginTop: 10,
  },
  square: {
    height: 35,
    width: 35,
    backgroundColor: '#872363',
    marginLeft: 10,
    marginTop: 30,
    marginRight: 120,
  },
  user: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'white',
    marginHorizontal: 160,
    marginTop: 20,
  },
  userText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    letterSpacing: 1.5,
    fontFamily: 'Avenir',
  },
  socialItem: {
    color: '#288be7',
    fontSize: 18,
    fontFamily: 'Avenir',
    letterSpacing: 0.8,
    textAlign: 'center',
  },
  count: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 7,
  },
  kupa: {
    marginLeft: 200,
    width: 20,
    height: 20,
    marginTop: 5,
  },
  follow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  login: {
    height: 50,
    borderRadius: 120,
    backgroundColor: '#872363',
    marginTop: 20,
    marginHorizontal: 20,
    alignContent: 'center',
    marginBottom: 10,
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
});

export default SettingsScreen;
