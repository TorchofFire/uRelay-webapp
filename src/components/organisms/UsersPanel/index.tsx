import PanelTitle from '../../atoms/PanelTitle';
import SidebarCollapseIcon from '../../atoms/SidebarCollapseIcon';
import UserCard from '../../molecules/UserCard';
import './index.css';

const UsersPanel = () => {
    return (
        <div className='users-panel'>
            <div className='panel-header'>
                <SidebarCollapseIcon></SidebarCollapseIcon>
                <PanelTitle></PanelTitle>
            </div>
            <div className='users-list custom-scrollbar'>

            </div>
            <div className='server-profile'>
                <div className='server-profile-wrapper'>
                    <UserCard></UserCard>
                </div>
            </div>
        </div>
    );
};

export default UsersPanel;