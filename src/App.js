
import './App.css';
import Contacts from "./components/Contacts/Contacts";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "./store/actions/users";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, []);
  return (
      <Contacts/>
  );
}

export default App;
