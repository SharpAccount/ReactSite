import './App.css';
import MainPage from '../Pages/MainPage.js';
import { ContextWrapper } from "../../Core/Context";
import {BrowserRouter, Switch} from "react-router-dom";
import LayOut from "../Components/layout";
function App() {
  return (
      <ContextWrapper>
          <LayOut>
              <MainPage/>
          </LayOut>
      </ContextWrapper>
  );
}

export default App;