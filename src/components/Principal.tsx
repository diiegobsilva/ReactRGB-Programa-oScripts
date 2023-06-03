import styled, { ThemeProvider } from 'styled-components'
import Input from './Input'
import { useContexto } from '../hooks';


export default function Principal() {
  const { red, green, blue, setRed, setGreen, setBlue} = useContexto()
  const color = {
      cor: `${red},${green},${blue}`
  }
  return (
      <ThemeProvider theme={color}>
        <Container> 
          <Input titulo={'red'} contento={red} setContexto={setRed}/> 
          <Input titulo={'green'} contento={green} setContexto={setGreen}/> 
          <Input titulo={'blue'} contento={blue} setContexto={setBlue}/> 
        </Container>
      </ThemeProvider>
     
  )
}
const Container = styled.div `
  width: 900px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: rgb(${props => props.theme.cor});
`;