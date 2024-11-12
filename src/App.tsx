import './App.css';
import ChannelsPanel from './components/organisms/ChannelsPanel';
import MessagesPanel from './components/organisms/MessagesPanel';
import NavigationPanel from './components/organisms/NavigationPanel';
import UsersPanel from './components/organisms/UsersPanel';

function App() {

  return (
    <>
      <NavigationPanel></NavigationPanel>
      <ChannelsPanel></ChannelsPanel>
      <MessagesPanel></MessagesPanel>
      <UsersPanel></UsersPanel>
    </>
  );
}

export default App;
