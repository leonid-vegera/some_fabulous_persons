import { View, Image, Text } from 'react-native';
import image from '../assets/dynamo_romb.jpg';

export const PersonCard = () => {
  const image = require('../assets/dynamo_romb.jpg')
  return (
    <View>
      <View>
        <Text>Person Card</Text>
        <Image source={image} />
      </View>
    </View>
  )
}

const styles = {
  container: {

  }
}