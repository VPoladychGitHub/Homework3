/*
Приложение состоит из 2 страниц: Список контактов и форма контакта
На странице Contacts есть таблица с 4-мя колонками (Имя, Фамилия, Телефон)
В таблице отобразить список контактов. В каждой строке контакта
есть кнопка удалить, которая удаляет контакт
Под таблицей кнопка/ссылка, которая показывает форму добавления нового контакта
В форме три поля и две кнопки (Сохранить и Отмена). Сохранить - сохраняет контакт и скрывает форму
    , "Отмена" просто скрывает форму.
    Реализовать приложение с использованием функциональных компонентов и хука useState.
    p.s. реализация должна быть в том же репозитории, где находится аналогичная домашка на классах,
    но в другой ветке

*/

import './App.css';
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
      <Contacts/>
  );
}

export default App;
