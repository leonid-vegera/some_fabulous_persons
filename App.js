import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView, ImageBackground, StatusBar } from 'react-native';
import { PersonCard } from './components/PersonCard';
import {personData} from './assets/data/data';

export default function App() {
  return (
    <View style={{ flex: 1}}>
      <StatusBar backgroundColor='#0000cd' barStyle='light-content' />
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.bgImage} source={{uri: 'https://7arts.com.ua/content/images/20/1500x1500l80nn0/nastennyy-gerb-fk-dinamo-kiev-iz-dereva-76320059365919.webp'}}>
          <ScrollView>
            <View>
              <Text style={styles.title}>1986 LEGENDS</Text>
            </View>
            <PersonCard {...personData.chanov}/>
            <PersonCard {...personData.demianenko}/>
            <PersonCard {...personData.rac}/>
            <PersonCard {...personData.mikhailichenko}/>
            <PersonCard {...personData.bal}/>
            <PersonCard {...personData.zavarov}/>
            <PersonCard {...personData.bielanov}/>
            <PersonCard {...personData.blokhin}/>

          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    textShadowColor: 'navy',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  bgImage: {
    flex: 1,
  }
});
