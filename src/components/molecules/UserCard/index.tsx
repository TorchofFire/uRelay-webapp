import './index.css';

const UserCard = () => {
    return (
        <div className='user-wrapper'>
            <div className='pfp'></div>
            <div className='username-title'>Username</div>
            <div className='status online'></div>
        </div>
    );
};

export default UserCard;