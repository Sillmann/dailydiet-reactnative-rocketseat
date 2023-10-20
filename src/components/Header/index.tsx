import { Container, Logo, Avatar } from './styles';

import logoImg from '@assets/logo.png';
import avatarPng from '@assets/avatar.png';

export function Header(){
  return(
    <Container>
      <Logo source={logoImg}/>
      <Avatar source={avatarPng} />
    </Container>
  )
}