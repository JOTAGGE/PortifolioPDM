import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, StyleSheet } from 'react-native';

export default function Jogo() {
  const [senha, setSenha] = useState('');
  const [tentativa, setTentativa] = useState('');
  type Tentativa = { id: string; valor: string; resultado: string };
  const [tentativas, setTentativas] = useState<Tentativa[]>([]);
  const [jogoEncerrado, setJogoEncerrado] = useState(false);

  useEffect(() => {
    iniciarJogo();
  }, []);

  const iniciarJogo = () => {
    const novaSenha = gerarSenha();
    setSenha(novaSenha);
    setTentativas([]);
    setTentativa('');
    setJogoEncerrado(false);
  };

  const gerarSenha = () => {
    let numeros: string[] = [];
    while (numeros.length < 4) {
      const digito = Math.floor(Math.random() * 10).toString();
      if (!numeros.includes(digito)) {
        numeros.push(digito);
      }
    }
    return numeros.join('');
  };

  const verificarTentativa = () => {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4) {
      Alert.alert('Erro', 'Digite 4 dígitos únicos.');
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (tentativa[i] === senha[i]) {
        bulls++;
      } else if (senha.includes(tentativa[i])) {
        cows++;
      }
    }

    const novaTentativa = {
      id: tentativas.length.toString(),
      valor: tentativa,
      resultado: `${bulls} Bulls, ${cows} Cows`,
    };
    const novasTentativas = [novaTentativa, ...tentativas];
    setTentativas(novasTentativas);
    setTentativa('');
    setTentativa('');

    if (bulls === 4) {
      Alert.alert('Parabéns!', 'Você acertou a senha!');
      setJogoEncerrado(true);
    } else if (novasTentativas.length >= 10) {
      Alert.alert('Fim de jogo', `Você atingiu o número máximo de tentativas. A senha era: ${senha}`);
      setJogoEncerrado(true);
    }
  };

  const mostrarSenha = () => {
    Alert.alert('Senha Atual', senha);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Senha</Text>
      {!jogoEncerrado && (
        <>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={4}
            value={tentativa}
            onChangeText={setTentativa}
            placeholder="Digite sua tentativa"
          />
          <Button title="Verificar" onPress={verificarTentativa} />
        </>
      )}
      <Button title="Mostrar Senha" onPress={mostrarSenha} />
      {jogoEncerrado && <Button title="Jogar Novamente" onPress={iniciarJogo} />}
      <FlatList
        data={tentativas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{`${item.valor} → ${item.resultado}`}</Text>
        )}
        style={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  input: { borderWidth: 1, padding: 8, marginVertical: 8 },
  lista: { marginTop: 16 },
});
