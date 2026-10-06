import {
  Image,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider style={styles.provider}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scroll}>
          <View style={styles.header}>
            <View style={styles.tituloB}>
              <Text style={styles.titulo}>Boca de Planta</Text>
              <Text style={styles.subtitulo}>
                Onde a natureza mostra os dentes
              </Text>
              <Image
                source={require('./assets/images-removebg-preview.png')}
                style={styles.logo}
              />
            </View>
            <View style={styles.descricaoB}>
              <Text style={styles.descricao}>
                As plantas carnívoras são organismos fascinantes que habitam
                solos pobres em nutrientes. Elas realizam fotossíntese como os
                outros vegetais, mas utilizam insetos e pequenos artrópodes como
                complemento nutricional. Por meio de folhas modificadas que
                funcionam como armadilhas, elas atraem as presas com cores e
                odores atraentes. Uma vez capturado, o animal é digerido por
                enzimas específicas liberadas pela própria planta. Isso permite
                a extração de compostos essenciais para a sobrevivência, como o
                nitrogênio. Existem centenas de espécies espalhadas pelo mundo,
                com os mais variados formatos e mecanismos de captura. Ao
                contrário dos mitos populares, elas não representam perigo para
                os seres humanos.
              </Text>
            </View>
          </View>

          <View style={styles.form}>
            <Text style={styles.formTitulo}>Tire sua dúvida aqui</Text>
            <TextInput placeholder="Escreva sua dúvida" style={styles.input} />
            <Button
              title="Enviar!"
              color="green"
              onPress={() => {
                alert('Duvida enviada!');
              }}
            />
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {' '}
            v2.0 - Pedro Henrique Conrado Ferreira{' '}
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  provider: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#2C3E35',
  },
  scroll: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  tituloB: {
    marginTop: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 18,
    color: 'white',
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
  },
  descricaoB: {
    padding: 24,
    width: '100%',
  },
  descricao: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  form: {
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  formTitulo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#1E2B25',
    color: 'white',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D5649',
    fontSize: 16,
    marginBottom: 16,
  },
  footer: {
    height: 60,
    backgroundColor: '#1E2B25',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#3d5649',
  },
  footerText: {
    fontSize: 14,
    color: 'white',
  },
});
