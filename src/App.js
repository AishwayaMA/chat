import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';
const projectID="1287c2d5-c02f-4ecf-a9bc-10756eab90e2";
const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
  
    return(
        <ChatEngine 
        height="100vh"
        projectID="1287c2d5-c02f-4ecf-a9bc-10756eab90e2"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
        
    );
};

export default App;

