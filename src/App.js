import React, {useState} from 'react';
import ViewModule from './components/view-module/ViewModule';
import ViewList from './components/view-list/ViewList';
import SwitchIcon from './components/switch-icon/SwitchIcon';
import products from './products';
import './App.css';

function App() {

  const [isTrue, setIsTrue] = useState(true);
  const onSwitch = (e) => {
    isTrue === true ? setIsTrue(false) : setIsTrue(true);
  }
  

  return (
    <div className="App">
      <SwitchIcon onSwitch={onSwitch} isTrue={ isTrue } />
      {isTrue ? <ViewModule props={products} /> : <ViewList props={products} />}
      
    </div>
  );
}

export default App;
