import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('./assets/images-removebg-preview.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Boca de Planta</Text>
        <Text style={styles.subtitle}>Onde a natureza mostra os dentes</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          v2.0 - Pedro Henrique Conrado Ferreira
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E35',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  footer: {
    height: 60,
    backgroundColor: '#1E2B25',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerText: {
    fontSize: 14,
    color: 'white',
  },
});
