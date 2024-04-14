import { Text, View, StyleSheet } from 'react-native';
import Login from './Screens/Login/Login'; // Adjust the import path as needed
import Dashboard from './Screens/Dashboard/Dashboard';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <Dashboard/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
