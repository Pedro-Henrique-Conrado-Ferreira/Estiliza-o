import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images-removebg-preview.png')}
        style={styles.logo}
      />

      <Text style={styles.titulo}>CADASTRE-SE</Text>

      <Text style={styles.label}>Insira seu email:</Text>
      <TextInput placeholder="seu email" style={styles.input} />

      <Text style={styles.label}>Insira sua senha:</Text>
      <TextInput placeholder="sua senha" style={styles.input} />

      <Text style={styles.label}>Confirme sua senha:</Text>
      <TextInput placeholder="confirme sua senha" style={styles.input} />

      <View style={styles.botaoContainer}>
        <Button
          title="ENTRAR"
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
    padding: 20,
    backgroundColor: 'green',
  },
  logo: {
    width: 120,
    height: 150,
    marginBottom: 20,
  },
  titulo: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 35,
    paddingBottom: 10,
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
  botaoContainer: {
    width: 300,
    marginTop: 10,
  },
});
