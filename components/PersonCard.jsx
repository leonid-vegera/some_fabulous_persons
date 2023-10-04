import { View, Image, Text, Platform, StyleSheet, useWindowDimensions, ImageBackground } from 'react-native';
import ballImage from '../assets/ball.png';

export const PersonCard = ({ name, image, position, championYears, cupYears, scores, performanceYears }) => {
  const windowWidth = useWindowDimensions().width;
  const ballImage = require('../assets/ball.png');
  return (
    <View
      style={[styles.card,
        {marginHorizontal: windowWidth > 500 && 120,
          paddingHorizontal: windowWidth > 500 && 60}
        ]}
    >
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.position}>{position}</Text>
      </View>

      <Image
        source={image}
        style={styles.image}
        resizeMode='contain'
        accessibilityLabel={`${name} player`}
      />

      <View style={styles.scores}>
        <Image
          source={ballImage}
          style={[styles.scoresImage, {right: windowWidth > 500 ? 120 : 40}]}
          resizeMode='contain'
        />
        <View style={[styles.scoresTextWrapper, {right: windowWidth > 500 ? 130 : 50}]}>
          <Text style={styles.scoresText}>{scores}</Text>
        </View>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Years of performance: {performanceYears.join(' - ')}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>🏅Champion years: {championYears.join(', ')}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>🏆Cup winner years: {cupYears.join(', ')}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    margin: 16,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#333',
        shadowOffset: {
          width: 6,
          height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4
      },
      android: {
        elevation: 5,
        shadowColor: '#333',
      }
    })
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 25,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 350,
    marginBottom: 25
  },
  scores: {
    position: 'absolute',
    top: 550,
    right: -5,
  },
  scoresImage: {
    position: 'absolute',
    right: 40,
    bottom: 110,
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: 'navy',
    borderWidth: 2,
  },
  scoresTextWrapper: {
    position: 'absolute',
    bottom: 130,
    right: 50,
    width: 70,
    alignItems: 'center',
  },
  scoresText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textDecorationColor: 'yellow',
    textShadowColor: '#000000',
    textShadowRadius: 10,
  },
  descriptionContainer: {
    marginBottom: 5
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  }
})