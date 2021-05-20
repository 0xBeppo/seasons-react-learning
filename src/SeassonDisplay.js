import React from 'react'
import './SeassonDisplay.css'

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is cold!',
        icon: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    }
    return lat > 0 ? 'winter' : 'summer'
}

const SeassonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth())
    const { text, iconName } = seasonConfig[season]
    return (
        <div className={`seasson-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>
                {text}
            </h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeassonDisplay