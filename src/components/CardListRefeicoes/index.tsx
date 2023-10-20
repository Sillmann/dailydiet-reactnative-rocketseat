import { Container, TextNomeRefeicao } from './styles';

export function CardListRefeicoes({nomeRefeicao}){
  return(
    <Container>
      <TextNomeRefeicao>{nomeRefeicao}</TextNomeRefeicao>
    </Container>
  )
}
