import { View, Text, Button } from 'react-native'

const DetailScreen = ({navigation}: any) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail screen</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')}/>
      <Button title='Go to Details... again' onPress={() => navigation.push('Details')} />
      <Button title='Go back' onPress={() => navigation.goBack('Home')}/>
    </View>
  )
}

export default DetailScreen;