/*Приложение состоит из 2 страниц: Список контактов и форма контакта
На странице Contacts есть таблица с 4-мя колонками (Имя, Фамилия, Телефон)
В таблице отобразить список контактов. В каждой строке контакта есть кнопка удалить,
 которая удаляет контакт

Под таблицей кнопка/ссылка, которая показывает форму добавления нового контакта

В форме три поля и две кнопки (Сохранить и Отмена). Сохранить - сохраняет контакт и скрывает форму,
 "Отмена" просто скрывает форму.
    */

import React from "react";
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';

class App extends React.Component {
    state = {
        rows: [
            {
                id: 1, firstName: 'FirstName', lastName: 'LastName', phone: 'Phone',
            },
            {
                id: 2, firstName: 'first', lastName: 'last', phone: '11111111',
            },
        ],
    };
    addTodo = (newTodo) => {
        if ((newTodo.firstName !== "") && (newTodo.lastName !== "") && (newTodo.phone !== "")) {
            this.setState(
                {
                    rows:
                        [
                            ...this.state.rows,
                            {
                                id: Math.random(),
                                isCompleted: false,
                                ...newTodo,
                            }],
                    isShowVersion: false,
                },
            );
        }
        console.log(newTodo);
    };

    deleteTodo = (id) => {
        this.setState({rows: this.state.rows.filter((todo) => todo.id !== id)});
    };

    toggleTodo = (id) => {
        if (id !== 1) {
            const newTodos = this.state.rows.map((todo) => (todo.id !== id
                ? todo
                : {...todo, isCompleted: !todo.isCompleted}));
            this.setState({rows: newTodos});
        }
    };

    showForm = () => {

        this.setState({isShowVersion: !this.state.isShowVersion});
        console.log(this.state.isShowVersion);
    };

    showFormCansel = () => {

        this.setState({isShowVersion: !this.state.isShowVersion});
        console.log(this.state.isShowVersion);
    };
    render() {
        return (
            <>
        <span>
          Total users:
            {this.state.rows.length}
        </span>
                <List rows={this.state.rows} onToggle={this.toggleTodo} onDeleteItem={this.deleteTodo}/>

                {this.state.isShowVersion ? <Form onCansel = {this.showFormCansel}  onAddElemnt={this.addTodo}/> : null}
                {!this.state.isShowVersion ? <button
                    onClick={this.showForm}>{this.state.isShowVersion ? 'Hide' : 'Add new record'}</button> : null}
            </>
        );
    }

}

export default App;
