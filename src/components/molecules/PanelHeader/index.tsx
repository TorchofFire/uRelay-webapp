import PanelTitle from '../../atoms/PanelTitle';
import SidebarCollapseIcon from '../../atoms/SidebarCollapseIcon';
import './index.css';

const PanelHeader = () => {
    return (
        <div className='panel-header'>
            <PanelTitle></PanelTitle>
            <SidebarCollapseIcon></SidebarCollapseIcon>
        </div>
    );
};

export default PanelHeader;