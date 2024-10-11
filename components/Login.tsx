import { SafeAreaView, StyleSheet, TextInput,Button } from "react-native";
import { useState } from "react";
export default function Login(){

    const [username, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');

    return(
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUserName}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
      />
      <Button title="Login" onPress={()=>{
        console.log(username,password);
      }}></Button>
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });