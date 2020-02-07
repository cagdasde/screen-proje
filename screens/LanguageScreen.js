import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  CheckBox,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function LanguageScreen() {
  const [languages, setLanguages] = useState([
    {language: 'All Languages', key: '0'},
    {language: 'Afganistan', key: '1'},
    {language: 'Agypten', key: '2'},
    {language: 'Albanien', key: '3'},
    {language: 'Algerien', key: '4'},
    {language: 'Andorra', key: '5'},
    {language: 'Antigua und Burbuda', key: '6'},
    {language: 'Aquatorialguinea', key: '7'},
  ]);

  return (
    <SafeAreaView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#9e236a', '#071e3b']}
        style={styles.linearGradient}>
        <View style={{marginTop: 30}} />
        <View>
          <ScrollView>
            {languages.map(item => (
              <View key={item.key}>
                <View style={styles.languageCheck}>
                  <Text style={styles.languageText}>{item.language}</Text>
                  <CheckBox
                    checkBoxColor="#ffffff"
                    style={styles.languageCheckItem}
                    value={false}
                  />
                </View>
                <View style={styles.bottomLine} />
              </View>
            ))}
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

LanguageScreen.navigationOptions = ({navigation}) => {
  return {
    header: (
      <View style={styles.languages}>
        <TouchableOpacity onPress={() => navigation.navigate('Index')}>
          <Image
            style={styles.square}
            source={require('../image/leftarrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.language}>Languages</Text>
      </View>
    ),
  };
};
const styles = StyleSheet.create({
  linearGradient: {
    height: 750,
  },
  languages: {
    backgroundColor: '#40204d',
    flexDirection: 'row',
  },
  language: {
    backgroundColor: '#40204d',
    height: 80,
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    letterSpacing: 1.13,
    fontFamily: 'Avenir',
  },
  languageCheck: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  languageCheckItem: {
    borderRadius: 2,
    borderColor: '#ffffff',
    opacity: 0.8,
    marginRight: 10,
  },
  languageText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    letterSpacing: 0.5,
    fontFamily: 'Avenir',
    lineHeight: 30,
    marginLeft: 10,
  },
  bottomLine: {
    height: 0.5,
    backgroundColor: '#ffffff',
    marginBottom: 12,
    marginTop: 12,
  },
  square: {
    height: 35,
    width: 35,
    backgroundColor: '#872363',
    marginLeft: 10,
    marginTop: 25,
    marginRight: 99,
  },
});

export default LanguageScreen;
