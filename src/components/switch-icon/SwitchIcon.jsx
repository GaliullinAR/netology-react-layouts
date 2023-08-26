import './SwitchIcon.css';
import SwitchList from './SwitchList';
import SwitchModule from "./SwitchModule";

const SwitchIcon = (props) => {
  return (
    <div className="switch-icon" onClick={props.onSwitch}>
      {props.isTrue === true ? <SwitchModule/> : <SwitchList/>}
    </div>
  );
}

export default SwitchIcon;