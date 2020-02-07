import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  CheckBox,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function CategoryScreen() {
  const [categorys, setcategorys] = useState([
    {category: 'All Categorys', key: '0'},
    {category: 'Animal', key: '1'},
    {category: 'Food', key: '2'},
    {category: 'Travel', key: '3'},
    {category: 'Cars', key: '4'},
    {category: 'Casa', key: '5'},
    {category: 'Action', key: '6'},
    {category: 'Musik', key: '7'},
    {category: 'Fun', key: '8'},
  ]);

  return (
    <SafeAreaView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#9e236a', '#071e3b']}
        style={styles.linearGradient}>
        <View>
          <ScrollView>
            {categorys.map(item => (
              <View key={item.key}>
                <View style={styles.categoryCheck}>
                  <Text style={styles.categoryText}>{item.category}</Text>
                  <CheckBox
                    checkBoxColor="#ffffff"
                    style={styles.categoryCheckItem}
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
CategoryScreen.navigationOptions = ({navigation}) => {
  return {
    header: (
      <View style={styles.categories}>
        <TouchableOpacity onPress={() => navigation.navigate('Index')}>
          <Image
            style={styles.square}
            source={require('../image/leftarrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.category}>Categorys</Text>
      </View>
    ),
  };
};
const styles = StyleSheet.create({
  linearGradient: {
    height: 750,
  },
  categories: {
    backgroundColor: '#40204d',
    flexDirection: 'row',
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
    marginBottom: 12,
    marginTop: 12,
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
