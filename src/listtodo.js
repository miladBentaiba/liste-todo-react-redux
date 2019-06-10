import React, { Component } from 'react'
import { connect } from 'react-redux'

import Itemlisttodo from './ItemToDo'

class Listtodo extends Component {
    constructor(props) {
        super(props)
        this.state = { newtab: [] }
    }

    render() {
        return (
            <div className='listtodo-app'>
                {this.props.todo.map((el, index) => <Itemlisttodo key={index} itemtodo={el} id={index} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => { return { todo: state.reducerToDo } }

export default connect(mapStateToProps)(Listtodo);