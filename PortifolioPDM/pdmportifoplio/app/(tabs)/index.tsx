import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/project_20230322_1522141-04.jpg')} // substitua pelo caminho correto se necessário
          style={styles.avatar}
        />
        <Text style={styles.title}>José Gabriel</Text>
      </View>
      <Text style={styles.subtitle}>Contato</Text>
      <Text>Cidade: Várzea, Recife</Text>
      <Text>Email: jg.barros.dsantos@gmail.com</Text>
      <Text style={styles.subtitle}>Sobre Mim</Text>
      <Text>
        Me formei como Técnico em Programação de Jogos Digitais no Cícero Dias, em 2020. Atualmente cursando Sistemas Para Internet na UNICAP.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { marginTop: 16, fontSize: 18, fontWeight: '600' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 16 },
  header: { alignItems: 'center', marginBottom: 24 },
});
