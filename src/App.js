// import logo from './logo.svg';
import './App.css';
// import {useState} from "react";
// import Toggle from './components/Toggole/Toggle';
import Game from './components/tictactoe/Game';
function App() {
    // const styles = 'sytle'
    return (
        <div className="App">
            <Game/>
        </div>
    );
}

// function YoutubeIteam(props) {
//
//     // console.log(props.children);
//
//     const [state, setState] = useState('state');
//
//     return (
//         <div className="youtube-item w-[400px] mx-auto text-center">
//             <div className="youtube-imgage my-2">
//                 <img className="w-[400px] h-[300px] rounded-1 object-cover" src={props.image} alt=""/>
//             </div>
//             {props.children}
//             <div className="youtube-footer flex flex-row gap-x-[50px]">
//                 <img className="youtube-avatar w-[50px] h-[50px] rounded-[50px] object-cover" src={props.avatar} alt=""/>
//                 <div className="youtube-infor">
//                     <h3 className="youtube-title">
//                         {props.title || "this is a video title"}
//                     </h3>
//                     <h4 className="youtube-author font-thin">{props.author || "this is a author of video"}</h4>
//                 </div>
//             </div>
//             {state}
//             <div onClick={() => setState('title new')} className="button cursor-pointer">
//                 click to set State
//             </div>
//
//         </div>
//     )
// }

export default App;
