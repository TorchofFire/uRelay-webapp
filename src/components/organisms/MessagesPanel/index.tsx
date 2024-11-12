import AutoResizingTextarea from '../../atoms/AutoResizingTextarea';
import FullMessage from '../../molecules/FullMessage';
import './index.css';

const MessagesPanel = () => {
    return (
        <div className='messages-panel'>
            <div className='messages-panel-header'>
                <div className='title-wrapper'>
                    <div className='big-title-icon hashtag' />
                    <div className='channel-title-text'>Channel Name</div>
                </div>
            </div>
            <div className='messages-container custom-scrollbar'>
                <FullMessage></FullMessage>
            </div>
            <div className='input'>
                <AutoResizingTextarea></AutoResizingTextarea>
                <div className='plane-icon' />
            </div>
        </div>
    );
};

export default MessagesPanel;