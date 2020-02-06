import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box';

class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: true,
    };
  }
  render() {
    return (
      <SafeAreaView>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['#9e236a', '#071e3b']}
          style={styles.linearGradient}>
          <View style={styles.categories}>
            <Image
              style={styles.square}
              source={require('../image/leftarrow.png')}
            />
            <Text style={styles.category}>Select categorys</Text>
          </View>
          <View style={styles.categoryCheck}>
            <Text style={styles.categoryText}>All categorys</Text>
            <CheckBox
              checkBoxColor="#ffffff"
              style={styles.categoryCheckItem}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked,
                });
              }}
              isChecked={this.state.isChecked}
            />
          </View>
          <View style={styles.bottomLine} />
          <View style={styles.categoryCheck}>
            <Text style={styles.categoryText}>Animal</Text>
            <CheckBox
              checkBoxColor="#ffffff"
              style={styles.categoryCheckItem}
            />
          </View>
          <View style={styles.bottomLine} />
          <View style={styles.categoryCheck}>
            <Text style={styles.categoryText}>Food</Text>
            <CheckBox
              checkBoxColor="#ffffff"
              style={styles.categoryCheckItem}
            />
          </View>
          <View style={styles.bottomLine} />
          <View style={styles.categoryCheck}>
            <Text style={styles.categoryText}>Travel</Text>
            <CheckBox
              checkBoxColor="#ffffff"
              style={styles.categoryCheckItem}
            />
          </View>
          <View style={styles.bottomLine} />
          <View style={styles.categoryCheck}>
            <Text style={styles.categoryText}>Cars</Text>
            <CheckBox
              checkBoxColor="#ffffff"
              style={styles.categoryCheckItem}
            />
          </View>
          <View style={styles.bottomLine} />
          <View style={styles.categoryCheck}>
            <Text style={styles.categoryText}>Casa</Text>
            <CheckBox
              checkBoxColor="#ffffff"
              style={styles.categoryCheckItem}
            />
          </View>
          <View style={styles.bottomLine} />
          <View style={styles.categoryCheck}>
            <Text style={styles.categoryText}>Action</Text>
            <CheckBox
              checkBoxColor="#ffffff"
              style={styles.categoryCheckItem}
            />
          </View>
          <View style={styles.bottomLine} />
          <View style={styles.categoryCheck}>
            <Text style={styles.categoryText}>Musik</Text>
            <CheckBox
              checkBoxColor="#ffffff"
              style={styles.categoryCheckItem}
            />
          </View>
          <View style={styles.bottomLine} />
          <View style={styles.categoryCheck}>
            <Text style={styles.categoryText}>Fun</Text>
            <CheckBox
              checkBoxColor="#ffffff"
              style={styles.categoryCheckItem}
            />
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 700,
  },
  categories: {
    backgroundColor: '#40204d',
    flexDirection: 'row',
    marginBottom: 30,
  },
  category: {
    backgroundColor: '#40204d',
    height: 80,
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    letterSpacing: 1.13,
    fontFamily: 'Avenir',
  },
  categoryCheck: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 10,
  },
  categoryCheckItem: {
    borderRadius: 2,
    borderColor: '#ffffff',
    opacity: 0.8,
  },
  categoryText: {
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
    marginRight: 99,
  },
});

export default CategoryScreen;
