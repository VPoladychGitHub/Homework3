import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';
class List extends Component {
    render() {
        return (
            <div className="container">
                {this.props.rows.map(
                    (item) => (
                        <ListItem
                            item={item}
                            key={item.id}
                            onToggle={this.props.onToggle}
                            onDeleteItem={this.props.onDeleteItem}
                        />
                    ),
                )}
            </div>
        );
    }
}

export default List;
