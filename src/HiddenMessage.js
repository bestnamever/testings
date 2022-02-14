import React, { useState } from 'react';

function HiddenMessage({ message }) {
    const [showMessage, setShowMessage] = useState(false);
    return (
        <div>
            <label htmlFor="toggle">Show Message</label>
            <input
                id="toggle"
                type="checkbox"
                onChange={(e) => setShowMessage(e.target.checked)}
                checked={showMessage}
            />
            {showMessage ? message : null}
        </div>
    );
}
export default HiddenMessage