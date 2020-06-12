import React, { Component } from 'react';
import classNames from 'classnames';

class Item extends Component {
    render() {
        return (
            <div className={classNames('item', {
                'upcoming-item': !this.props.item.isDone,
                'finished-item': this.props.item.isDone
                })} onClick={this.props.onClick}>
                {`${this.props.index}. ${this.props.item.name}`}
            </div>
        )
    }
}

export default Item;