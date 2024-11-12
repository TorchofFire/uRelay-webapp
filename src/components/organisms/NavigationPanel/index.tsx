import NavIcon from '../../atoms/NavIcon';
import './index.css';

const NavigationPanel = () => {
    return (
        <div className='navigation-panel'>
            <div className='fixed-nav'>
                <NavIcon></NavIcon>
                <NavIcon></NavIcon>
                <NavIcon></NavIcon>
            </div>
            <div id='nav-break'></div>
            <div className='server-list'>
                <NavIcon></NavIcon>
                <NavIcon></NavIcon>
                <NavIcon></NavIcon>
                <NavIcon></NavIcon>
                <NavIcon></NavIcon>
                <NavIcon></NavIcon>
            </div>
        </div>
    );
};

export default NavigationPanel;