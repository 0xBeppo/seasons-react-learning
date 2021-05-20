import React from 'react'

const Spinner = ({ msg }) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{msg}</div>
        </div>
    )
}

Spinner.defaultProps = {
    msg: 'Loading...'
}

export default Spinner