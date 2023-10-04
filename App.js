// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { PersonCard } from './components/PersonCard';

export default function App() {
  const personData = {
    name: "Andriy Bal`",
    image: require('./assets/bal.jpg'),
    position: 'Defender',
    performanceYears: ['1981', '1990'],
    championYears: ['1981', '1985', '1986', '1990'],
    cupYears: ['1982', '1985', '1987', '1990'],
    scores: 11,
  };

  return (
    <View style={{ flex: 1}}>
      <StatusBar backgroundColor='#0000cd' barStyle='light-content' />
      <SafeAreaView style={styles.container}>
        {/*<View style={styles.container}>*/}
        <ImageBackground style={styles.bgImage} source={{uri: 'https://7arts.com.ua/content/images/20/1500x1500l80nn0/nastennyy-gerb-fk-dinamo-kiev-iz-dereva-76320059365919.webp'}}>
          <ScrollView>
            <PersonCard {...personData}/>
            <PersonCard {...personData}/>
            {/*<PersonCard />*/}
            {/*<PersonCard />*/}
          </ScrollView>

        </ImageBackground>
        {/*</View>*/}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2c8c8',
    paddingTop: Platform.OS === 'ios' ? 30 : 0
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  bgImage: {
    // paddingTop: Platform.OS === 'android' ? -30 : 0,
    flex: 1,
  }
});
