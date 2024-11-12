import PanelTitle from '../../atoms/PanelTitle';
import SidebarCollapseIcon from '../../atoms/SidebarCollapseIcon';
import './index.css';

const ChannelsPanel = () => {
    return (
        <div className='channels-panel'>
            <div className='panel-header'>
                <PanelTitle></PanelTitle>
                <SidebarCollapseIcon></SidebarCollapseIcon>
            </div>
            <div className='channel-category'>
                <div className='category-label'>
                <div className='angle-down-icon'></div>
                <div className='category-name'>CATEGORY</div>
                </div>
                <div className='channels-wrapper'>
                <div className='channel'>
                    <div className='hashtag-icon'></div>
                    <div className='channel-name'>Name</div>
                </div>
                <div className='channel'>
                    <div className='hashtag-icon'></div>
                    <div className='channel-name'>Name</div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ChannelsPanel;