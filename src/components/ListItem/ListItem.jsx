import React, {Component} from 'react';
import './ListItem.css';

class ListItem extends Component {
    onClickDelete = (e) => {
        e.stopPropagation();
        this.props.onDeleteItem(this.props.item.id);
    };

    render() {
        const {item, onToggle} = this.props;
        return (
            <div
                className={`todo-item ${item.isCompleted ? 'done' : ''}`}
                onClick={() => onToggle(item.id)}
            >

                    <div> {item.firstName}</div>


                    <div> {item.lastName}</div>


                    <div> {item.phone}</div>

                {(item.id !== 1) ? <span className="delete-button" onClick={this.onClickDelete}>X</span>: <span>     </span>}

            </div>
        );
    }
}

export default ListItem;
