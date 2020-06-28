import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.renderItems = this.renderItems.bind(this);
      }
    
    renderItems = () => this.props.items.map((item, index) => (
        <ListGroupItem key={index}>
            <div className="view">
                <label>{item}</label>
              &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-outline-success" onClick={() => { this.props.onRemoveIndex(index) }} >Ukończone</button>
            </div>
        </ListGroupItem>
    ));

    render() {
        return (
            <section className="main">
                <ListGroup className="tasks-list">
                    {this.props.items.length === 0 ? '' : this.renderItems()}
                </ListGroup>
            </section>
        );
    }
}