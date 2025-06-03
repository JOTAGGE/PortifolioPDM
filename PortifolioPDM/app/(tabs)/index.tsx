import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('/workspaces/PortifolioPDM/PortifolioPDM/assets/images/project_20230322_1522141-04.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">José Gabriel!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Contato</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Cidade - </ThemedText> Várzea, Recife <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold">Email - </ThemedText> jg.barros.dsantos@gmail.com <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sobre mim</ThemedText>
        <ThemedText>
          {`Me formei como Técnico em Programação de Jogos Digitais no Cícero Dias, em 2020. Atualmente prestando graduação na UNICAP, no curso de Sistemas Para Internet. Desde cedo sou apaixonado por tecnologia, e desde cedo busquei me formar para fazer carreira na área. Tenho aspiração à liderança e organização, e tenho experiência com trabalho em equipe.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Experiência</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">Tanto no Cícero Dias quanto atualmente na graduação, estou frequentemente fazendo projetos em equipe.</ThemedText>{' '}
          <ThemedText type="defaultSemiBold">Sou apaixonado pelo google, então sei manusear grande parte das suas ferramentas, incluindo o Docs e Excel. Também tenho repertório com a Microsoft Excel e Word.</ThemedText>{' '}
          <ThemedText type="defaultSemiBold">Desde sempre gosto de ter tudo bem organizado e definido, e uso muito bem o Notion e o Google Agenda, minhas únicas ferramentas de organização e gestão inclusive.</ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Formação</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">Me formei no Núcleo Avançado Em Educação e Escola Técnica Estadual Cícero Dias (Ensino médio técnico), como Técnico em Programação de Jogos Digitais. A formação durou de 2018-2020.</ThemedText>{' '}
          <ThemedText type="defaultSemiBold">Atualmente estou cursando Sistemas Para Internet na Universidade Católica de Pernambuco (Ensino superior) - 2022-2025</ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Competências</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">html (intermediário); css (iniciante); javascript (iniciante); c# (iniciante); dart (iniciante); Python (iniciante)</ThemedText>{' '}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
