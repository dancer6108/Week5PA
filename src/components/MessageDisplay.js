import React, { useState } from 'react';
import classes from '../css/MessageDisplay.module.css';

const MessageDisplay = () => {
    const [message, setMessage] = useState(false);
    const [inputText, setInputText] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);
        if (inputText === '') {
            setError('Can\'t submit a blank message, sorry.');
            return;
        }
        setMessage(inputText);
        setInputText('');
    }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.formDiv}>
                {message ? <p className={classes.prompt}>{message}</p>  : <p className={classes.prompt}>Enter a Message to Display</p>}
                <form className={classes.messageForm} onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={inputText}
                        placeholder='message...'
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button type='submit'>Submit</button>
                    {message && <button onClick={() => setMessage(false)}>Clear Message</button>}
                </form>
            </div>
            <div className={classes.messageDiv}>
                {error ? <div><p className={classes.errorMessage}>{error}</p></div> : <div><br /></div>}
            </div>
        </div>
    );
};

export default MessageDisplay;