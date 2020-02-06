import React from 'react';
import {View, SafeAreaView, StyleSheet, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const IndexScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={['#9e236a', '#071e3b']}
        style={{height: 700}}>
        <View style={styles.screenButton}>
          <View style={{marginTop: 25}} />
          <Button
            color="#071e3b"
            title="First Screen"
            onPress={() => navigation.navigate('First')}
          />
          <View style={{marginBottom: 25}} />
          <Button
            color="#071e3b"
            title="Action Screen"
            onPress={() => navigation.navigate('Action')}
          />
          <View style={{marginBottom: 25}} />
          <Button
            color="#071e3b"
            title="Category Screen"
            onPress={() => navigation.navigate('Category')}
          />
          <View style={{marginBottom: 25}} />
          <Button
            color="#071e3b"
            title="Language Screen"
            onPress={() => navigation.navigate('Language')}
          />
          <View style={{marginBottom: 25}} />
          <Button
            color="#071e3b"
            title="Setting Screen"
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
IndexScreen.navigationOptions = () => {
  return {
    header: <View style={{margin: 0}} />,
  };
};

const styles = StyleSheet.create({
  screenButton: {
    marginTop: 30,
  },
});

export default IndexScreen;
