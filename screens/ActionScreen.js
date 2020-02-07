import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ActionScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#9e236a', '#071e3b']}
        style={styles.linearGradient}>
        <View style={styles.follow}>
          <View style={styles.followItem1}>
            <Text style={styles.count}>1000</Text>
            <Text style={styles.socialItem}>Following</Text>
          </View>
          <View style={styles.followItem2}>
            <Text style={styles.count}>1000</Text>
            <Text style={styles.socialItem}>Follow Backs</Text>
          </View>

          <View style={styles.followItem3}>
            <Text style={styles.count}>+1000</Text>
            <Text style={styles.socialItem}>Credits</Text>
          </View>
          <View style={styles.followItem4}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Image
                style={styles.settings}
                source={require('../image/settings.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.some}>Some interesting accounts</Text>
        <View style={styles.acounts} />

        <View style={styles.acounts} />
      </LinearGradient>
    </SafeAreaView>
  );
};
ActionScreen.navigationOptions = () => {
  return {
    header: <View style={{margin: 0}} />,
  };
};

const styles = StyleSheet.create({
  linearGradient: {
    height: 750,
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

  follow: {
    marginTop: 50,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  followItem1: {
    backgroundColor: '#40204d',
    marginRight: 2,
    marginLeft: 10,
    width: 100,
  },
  followItem2: {
    backgroundColor: '#40204d',
    marginRight: 2,
    width: 150,
  },
  followItem3: {
    backgroundColor: '#40204d',

    width: 90,
  },
  followItem4: {
    backgroundColor: '#40204d',
    marginLeft: 2,
    width: 40,
    marginRight: 10,
  },
  kupa: {
    marginLeft: 0,
    width: 25,
    height: 25,
    marginTop: 20,
  },
  settings: {
    marginTop: 10,
  },
  some: {
    fontFamily: 'Avenir',
    fontSize: 25,
    color: '#ffffff',
    letterSpacing: 0.83,
    marginLeft: 15,
    marginVertical: 20,
  },
  acounts: {
    height: 200,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default ActionScreen;
