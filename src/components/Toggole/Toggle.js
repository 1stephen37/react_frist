import {useState} from "react";
import './toggle.css';

function Toggle() {

    const [on, setOn] = useState(false);

    const handleToggle = () => {
        setOn((on) => !on);
    }

    return (
       <>
           <div className={`toggle ${on ? 'active' : ''}`} onClick={handleToggle}>
               <div className={`spinner ${on ? 'active' : ''}`}>
                   {/*313131*/}
               </div>
           </div>

           {on ? 'on' : 'off'}

           <div className="toggle-control">
               <div className="toggole-on" onClick={() => setOn(true)}>
                   on
               </div>
               <div className="toggole-off" onClick={() => setOn(false)}>
                   off
               </div>
           </div>


       </>
    )

}

export default Toggle;