import logo from '../../assets/logo.svg'
import { Container, Content } from './styles';
export const Header = function () {
  return (
   <Container>
     <Content>
      <img src={logo} alt="Dtmoney" />
      <button type="button">
          Nova Transação
      </button>
     </Content>
   </Container>
  )
}