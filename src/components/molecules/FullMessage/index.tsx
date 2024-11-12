import './index.css';

const FullMessage = () => {
    return (
        <div className='full-message'>
            <div className='message-pfp'></div>
            <div className='message-wrapper'>
                <div className='message-user-wrapper'>
                    <div className='message-sender'>Username</div>
                    <div className='message-date'>Today at 12:26 PM</div>
                </div>
                <p className='message-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
};

export default FullMessage;