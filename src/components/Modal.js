import React, { Component } from 'react';
import classNames from 'classnames';

class Modal extends Component {
    render() {
        return (
            <div className={ classNames('Modal', { 'display-none': !this.props.isAdding }) }>
                <div className="add-item-wrapper">
                    <input type="text" id="new-todo" ref={ref => this.inputElement = ref} placeholder="Add something to do..." />                    
                    <button id="add-done" onClick={this.props.addItem(this.inputElement)}>Add</button>
                </div> 
            </div>                        
        )
    }
}
export default Modal;