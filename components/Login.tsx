import { SafeAreaView, StyleSheet, TextInput,Button } from "react-native";
import { useState } from "react";
export default function Login(){

    const [username, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
    const login = () =>{
      console.log(username,password);
    }

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
      <Button title="Login" onPress={login }></Button>
    </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 2,
      padding: 12,
      backgroundColor: 'lightgray',
      
    },
  });