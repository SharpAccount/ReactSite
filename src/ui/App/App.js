import './App.css';
import MainPage from '../Pages/MainPage.js';
import { ContextWrapper } from "../../Core/Context";
import {BrowserRouter, Switch} from "react-router-dom";
function App() {
  return (
      <ContextWrapper>
          <MainPage/>
      </ContextWrapper>
  );
}

export default App;