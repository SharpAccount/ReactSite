import './App.css';
import {URLs} from "../../constants/paths";
import { ContextWrapper } from "../../Core/Context";
import {BrowserRouter, Switch, Route} from "react-router-dom";
function App() {
  return (
      <ContextWrapper>
          <BrowserRouter>
              <Switch>
                  {URLs.map((el) => (
                      <Route exact = "" path = {el.path} component = {el.page}/>
                  ))}
              </Switch>
          </BrowserRouter>
      </ContextWrapper>
  );
}

export default App;