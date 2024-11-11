import Break from '../../atoms/Break';
import FixedNav from '../../molecules/FixedNav';
import ServerList from '../../molecules/ServerList';
import './index.css';

const NavigationPanel = () => {
    return (
        <div className='navigation-panel'>
            <FixedNav></FixedNav>
            <Break></Break>
            <ServerList></ServerList>
        </div>
    );
};

export default NavigationPanel;