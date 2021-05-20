import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SeassonDisplay from './SeassonDisplay'
import Spinner from './Spinner'

class App extends Component {
    state = { lat:null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message })
        )
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <h1>Error {this.state.errorMessage}</h1>
        } 
        if (this.state.lat && !this.setState.errorMessage){
            return <SeassonDisplay lat={this.state.lat} />
        }
        return <Spinner msg="Waiting for the ubication..."/>
    }

    render() {
        return <div>
            {this.renderContent()}
        </div>
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)