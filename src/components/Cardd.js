import React from 'react'

import '../css/Card.css'

const HIDDEN_SYMBOL = '❓'

const Cardd = ({ card, feedback }) => (
    <div className={`card ${feedback}`}>
        <span className="symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)
export default Cardd