import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{alignSelf: 'center'}}>Profile</Text>
      <View>
        <View style={{flexDirection: 'row', marginTop: 8, marginLeft: 8}}>

          <Image
            source={{ uri: "https://imgs.search.brave.com/FVDZiAChauj6xmudkB6S-wBfTd9yGSj7KKMuAVEz6k4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iLnRo/dW1icy5yZWRkaXRt/ZWRpYS5jb20vUjZS/dW5nZno1Yi11MTBq/RXpLbVlwa3QxN3Fo/T250OEZxNEdvb2d2/YWNUVS5qcGc" }}
            style={{ width: 50, height: 50, borderWidth:2, borderRadius: 90, borderBlockColor: '#421313'}}
          />

          <Text style={{ fontStyle:'italic', alignSelf: 'center', marginLeft: 20}}> Ufric Stormcloack </Text>

          <Pressable style={{ backgroundColor: '#421313', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', width: 50, height: 30, marginLeft: 8, borderRadius: 10}}>
            <Text style={{ color: '#fff'}}>Editar</Text>
          </Pressable>

        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 35,
  },
});
