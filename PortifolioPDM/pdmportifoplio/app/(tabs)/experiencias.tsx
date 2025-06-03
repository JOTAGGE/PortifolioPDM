import { View, Text, StyleSheet } from 'react-native';

export default function ExperienciaAcademica() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>
      <Text>
        - Técnico em Programação de Jogos Digitais - Cícero Dias (2018-2020)
      </Text>
      <Text>
        - Sistemas Para Internet - UNICAP (2022-2025)
      </Text>

      <Text style={styles.title}>Experiência Profissional</Text>
      <Text>
        - Participação em projetos acadêmicos em equipe durante o curso técnico e graduação.
      </Text>
      <Text>
        - Familiaridade com ferramentas como Google Docs, Excel, Notion e Google Agenda.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
});
