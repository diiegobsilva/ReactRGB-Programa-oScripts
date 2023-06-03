import styled from 'styled-components';
import { useContexto } from '../hooks';
export default function Input({titulo, contento, setContexto}:any){
  return (
    <div>
        <Campo  type="text" placeholder={titulo} value={contento} onChange={(e) => setContexto(e.target.value)}/>
    </div>
  )
}
const Campo = styled.input`
  margin: 30px;
  height: 50px;
  width: 200px;
  border-radius: 15px;
  border-width: 1px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;

`;





