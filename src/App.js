
import './App.css';
import TodoList from "./components/TodoList";
import {Provider} from "react-redux";
import store from "./store";
function App() {
  return (
      <TodoList/>
  );
}

export default App;
