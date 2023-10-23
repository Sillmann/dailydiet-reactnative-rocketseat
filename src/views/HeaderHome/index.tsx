import { Avatar, Container, Logo } from "./styles";

import logoPng from '@assets/logo.png';
import avatarPng from '@assets/avatar.png';

export function HeaderHome(){
  return (
    <Container >
      <Logo source={logoPng} />
      <Avatar source={avatarPng} />
    </Container>
  );
}