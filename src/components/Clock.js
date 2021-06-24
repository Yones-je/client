import React, { useState } from 'react';

const Clock = ({ time }) => {
    const [timer, setTimer] = useState(time)
    const seconds = time * 60;


    return (
        <div>
            
        </div>
    )
}

export default Clock
