import { StyleSheet, Text, View, Button } from 'react-native';

const LogInScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>로그인</Text>
      </View>
      <View style={styles.content}></View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Simmssoft</Text>
      </View>
      {/* <Button title='Go to Detail' onPress={() => navigation.navigate('Details')}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'tomato',
  },
  headerText: {
    fontSize: 20
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'teal'
  },
  titleText: {
    fontSize: 20
  },
  content: {
    flex: 10,
    backgroundColor: 'orange'
  },
  footer: {
    flex: 1,
    backgroundColor: 'lightgreen'
  },
  footerText: {

  }
});

export default LogInScreen;