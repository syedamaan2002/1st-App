import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput , Button, Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the website</Text>
      <TextInput placeholder="Enter Name"/> 
      <TextInput placeholder="Enter Mobile number"/> 
      <Button title='sign in' onPress={() => Alert.alert("Successfylly logged in")
      }/>

      <Button title='sign up' onPress={() => Alert.alert("thank you")
    }/>
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
