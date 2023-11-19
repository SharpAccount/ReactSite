import {URLs} from "../../constants/paths";
import { ContextWrapper } from "../../Core/Context";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LayOut from "../Components/layOut";
import './App.css';

function App() {
  return (
      <ContextWrapper>
          <BrowserRouter>
              <Switch>
                  <LayOut>
                      {URLs.map((el) => (
                          <Route exact path = {el.path} component = {el.page}/>
                      ))}
                  </LayOut>
              </Switch>
          </BrowserRouter>
      </ContextWrapper>
  );
}

export default App;