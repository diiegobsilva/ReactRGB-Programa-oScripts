import { ThemeProvider } from "styled-components";
import Principal from "./components/Principal";
import { ContextoProvider } from "./contexts";

function App() {
  return ( 
  <ContextoProvider>
    <Principal/>
  </ContextoProvider>
  );
}
export default App;
