import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Aplicativo</Text>
      <Text>
        Este aplicativo foi desenvolvido utilizando React Native com Expo Router. As principais tecnologias e módulos utilizados incluem:
      </Text>
      <Text>- React Native</Text>
      <Text>- Expo Router</Text>
      <Text>- TypeScript</Text>
      <Text>- Expo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
});
