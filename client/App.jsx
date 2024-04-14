import { Text, View, StyleSheet } from 'react-native';
import Login from './Screens/Login/Login'; // Adjust the import path as needed

const App = () => {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});

export default App;
