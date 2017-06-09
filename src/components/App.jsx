import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder } from '../actions';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text);
    }

    render() {
        console.log('this.props', this.props)
        return (
            <div className='App'>
                <div className='title'>Reminder Pro </div>
                <div className='form-inline'>
                    <div className='form-group'>
                        <input
                            placeholder='What you wanna do ?'
                            className='form-control'
                            onChange={event => this.setState({ text: event.target.value })}
                        />
                    </div>
                    <button
                        type='button'
                        className='btn btn-success'
                        onClick={() => this.addReminder()}
                    >Add Reminder</button>
                </div>
            </div>
        )
    }
}

function mapDispachToProps(dispach) {
    return bindActionCreators({ addReminder }, dispach)
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, mapDispachToProps)(App);