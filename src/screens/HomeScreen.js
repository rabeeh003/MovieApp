import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, ScrollView} from 'react-native';
import Colors from '../constents/Colors';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" translucent={false} backgroundColor={Colors.BASIC_BG}/>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: Colors.BASIC_BG,
  },
  headerContainer:{
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle:{
    fontSize: 28,
  },
  headerSubTitle:{
    fontSize: 13,
    color: Colors.ACTIVE
  }
});

export default HomeScreen