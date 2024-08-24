import classes from './css/App.module.css';

import MessageDisplay from './components/MessageDisplay';

function App() {
  return (
    <div className={classes.container}>
      <MessageDisplay />
    </div>
  );
}

export default App;
