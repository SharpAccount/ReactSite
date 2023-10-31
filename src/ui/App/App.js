import './App.css';
import MainPage from '../Pages/MainPage.js';
import { ContextWrapper } from "../../Core/Context";
function App() {
  return (
      <ContextWrapper>
          <MainPage/>
      </ContextWrapper>
  );
}

export default App;