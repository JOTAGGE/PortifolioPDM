import { View, Text, StyleSheet } from 'react-native';

export default function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>
      <Text style={styles.projectTitle}>Jogo de Cartas dos Deuses</Text>
      <Text>
        Jogo analógico de cartas desenvolvido no ensino médio, inspirado em Pokémon e Yu-Gi-Oh.
      </Text>
      <Text style={styles.projectTitle}>Chico o Siri</Text>
      <Text>
        Projeto de jogo desenvolvido durante o Ensino Médio.
      </Text>
      <Text style={styles.projectTitle}>Vôlei Delas</Text>
      <Text>
        Aplicativo para agendamento de partidas de vôlei entre mulheres, utilizando o sistema de quadras do governo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  projectTitle: { marginTop: 16, fontSize: 18, fontWeight: '600' },
});
