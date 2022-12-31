import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    state = {
        author: '',
        title: '',
        firstName: '',
        lastName: '',
        phone: '',
    };

    onInputChange = (e) => {
        const {value, name} = e.target;
        this.setState({
            ...this.state,
            [name]: value,
        });
    };

    onClick = (e) => {
        e.preventDefault();
        this.props.onAddElemnt(this.state);
        this.resetForm();
    };

    handleCancel = (e) => {
        e.preventDefault();
        this.props.onCansel();
        this.resetForm();
    };

    resetForm = () => {
        this.setState({inputValue: ''});
    };

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={this.onInputChange}
                    placeholder="FirstName"
                    name="firstName"
                />
                <input
                    type="text"
                    value={this.state.lastName}
                    onChange={this.onInputChange}
                    placeholder="LastName"
                    name="lastName"
                />
                <input
                    type="text"
                    value={this.state.phone}
                    onChange={this.onInputChange}
                    placeholder="Phone"
                    name="phone"
                />
                <button  onClick={this.onClick}>Add element</button>
                <button  onClick={this.handleCancel}>Cancel❌</button>
            </form>
        );
    }
}

export default Form;
