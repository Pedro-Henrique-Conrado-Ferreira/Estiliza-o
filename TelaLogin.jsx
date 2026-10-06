import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Pressable,
  Image,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images-removebg-preview.png')}
        style={styles.logo}
      />

      <Text style={styles.label}>Insira seu email:</Text>
      <TextInput
        placeholder="seu email"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <Text style={styles.label}>Insira sua senha:</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="sua senha"
        style={styles.input}
      />

      <Pressable
        onPress={() => {
          alert('Pressable!');
        }}
        style={styles.link}>
        <Text style={styles.linkTexto}>Não tem uma conta? Cadastre-se</Text>
      </Pressable>

      <View style={styles.botaoContainer}>
        <Button
          title="ENVIAR"
          color="red"
          onPress={() => {
            alert('Dados enviados!');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
    backgroundColor: 'green',
  },
  logo: {
    width: 120,
    height: 150,
    marginBottom: 20,
  },
  label: {
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    width: 300,
    borderWidth: 2,
  },
  link: {
    marginTop: 10,
  },
  linkTexto: {
    color: 'white',
  },
  botaoContainer: {
    width: 300,
    marginTop: 10,
  },
});
