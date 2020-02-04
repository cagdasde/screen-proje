import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box';

class LanguageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
    };
  }
  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#9e236a', '#071e3b']}
        style={styles.linearGradient}>
        <View style={styles.languages}>
          <Image
            style={styles.square}
            source={require('../image/leftarrow.png')}
          />
          <Text style={styles.language}>Languages</Text>
        </View>
        <View style={styles.languageCheck}>
          <Text style={styles.languageText}>All Languages</Text>
          <CheckBox
            checkBoxColor="#ffffff"
            style={styles.languageCheckItem}
            onClick={() => {
              this.setState({
                isChecked: !this.state.isChecked,
              });
            }}
            isChecked={this.state.isChecked}
          />
        </View>
        <View style={styles.bottomLine} />
        <View style={styles.languageCheck}>
          <Text style={styles.languageText}>Afganistan</Text>
          <CheckBox checkBoxColor="#ffffff" style={styles.languageCheckItem} />
        </View>
        <View style={styles.bottomLine} />
        <View style={styles.languageCheck}>
          <Text style={styles.languageText}>Agypten</Text>
          <CheckBox checkBoxColor="#ffffff" style={styles.languageCheckItem} />
        </View>
        <View style={styles.bottomLine} />
        <View style={styles.languageCheck}>
          <Text style={styles.languageText}>Albanien</Text>
          <CheckBox checkBoxColor="#ffffff" style={styles.languageCheckItem} />
        </View>
        <View style={styles.bottomLine} />
        <View style={styles.languageCheck}>
          <Text style={styles.languageText}>Algerien</Text>
          <CheckBox checkBoxColor="#ffffff" style={styles.languageCheckItem} />
        </View>
        <View style={styles.bottomLine} />
        <View style={styles.languageCheck}>
          <Text style={styles.languageText}>Andorra</Text>
          <CheckBox checkBoxColor="#ffffff" style={styles.languageCheckItem} />
        </View>
        <View style={styles.bottomLine} />
        <View style={styles.languageCheck}>
          <Text style={styles.languageText}>Angola</Text>
          <CheckBox checkBoxColor="#ffffff" style={styles.languageCheckItem} />
        </View>
        <View style={styles.bottomLine} />
        <View style={styles.languageCheck}>
          <Text style={styles.languageText}>Antigua und Burbuda</Text>
          <CheckBox checkBoxColor="#ffffff" style={styles.languageCheckItem} />
        </View>
        <View style={styles.bottomLine} />
        <View style={styles.languageCheck}>
          <Text style={styles.languageText}>Aquatorialguinea</Text>
          <CheckBox checkBoxColor="#ffffff" style={styles.languageCheckItem} />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 700,
  },
  languages: {
    backgroundColor: '#40204d',
    flexDirection: 'row',
    marginBottom: 30,
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

    marginHorizontal: 10,
  },
  languageCheckItem: {
    borderRadius: 2,
    borderColor: '#ffffff',
    opacity: 0.8,
  },
  languageText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    letterSpacing: 0.5,
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
    marginRight: 99,
  },
});

export default LanguageScreen;
