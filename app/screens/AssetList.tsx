import { View, Text, Button } from 'react-native';

const ListScreen = ({navigation} : any) => {
  return (
    <View>
      <Text>List Screen</Text>
      <Button title='To Detail' onPress={() => navigation.navigate('DetailScreen')}/>
      <Button title='To User' onPress={() => navigation.navigate('UserScreen')}/>
    </View>
  )
}

export default ListScreen;