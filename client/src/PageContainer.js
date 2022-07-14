import {useContext, useEffect, useState, createRef, useRef} from 'react';
import ReactDOM from 'react-dom';
import {PageContextProvider, PageContext} from './context.js';

import Timer0 from './components/apps/timer0';
import './PageContainer.css'
import Weather from './components/apps/Weather.js';



function CompItem(props){
    return (
        <div className='compItem'>
            <Weather />
        </div>
    );
}



function PageContainer() {
    const page = useContext(PageContext);

    return (
        <div className='pageContainer'>
            <CompItem />
        </div>
    );
}








// // https://dev.to/graftini/rendering-in-an-iframe-in-a-react-app-2boa
// // https://reactjs.org/docs/portals.html
// function IFrame({ children, doShow }) {
//     const [ref, setRef] = useState();
//     const container = ref?.contentWindow?.document?.body;
  
//     return (
//       <iframe ref={setRef} style={{display: doShow ? 'inline-block': 'none'}}>
//         {container && ReactDOM.createPortal(children, container)}
//       </iframe>
//     );
// }


// function CodeView(props) {
//     return (
//       <div className='codeView' style={{display: props.doShow ? 'inline-block': 'none'}}>
//         {props.viewName}
//       </div>
//     );
// }






// function CompItem(props){
//     const compViewRef = createRef();
//     const [view, setView] = useState('view');
//     const [showFlags, setShowFlags] = useState(new Map([['view', true],['html', false], ['js', false], ['css', false]]));

//     // const showFlags = new Map([['view', true],['html', false], ['js', false], ['css', false]]);

//     const preView = useRef('view'); // to keep track of the previous view value
//     useEffect(() => {
//         preView.current = view;
//     }, [view]);


//     const handleCompView = (e) => {
//         e.preventDefault();
//         // To get the iframe content as string:
//         // compViewRef.current is HTMLDivElement (check mozilla apis...) 
//         // console.log(String(compViewRef.current.firstElementChild.contentWindow.document.documentElement.outerHTML));
//         showFlags.set(preView.current, false);
//         showFlags.set(e.target.name, true);
//         setShowFlags(new Map(showFlags));
//         setView(e.target.name);
//     }

//     return (
//         <div className='compItem'>
//             <nav>
//                 <ul>
//                     <li><a href='#' name={'view'} onClick={handleCompView}>View</a></li>
//                     <li><a href='#' name={'html'} onClick={handleCompView}>HTML</a></li>
//                     <li><a href='#' name={'js'} onClick={handleCompView}>JS</a></li>
//                     <li><a href='#' name={'css'} onClick={handleCompView}>CSS</a></li>
//                 </ul>
//             </nav>

//             <div ref={compViewRef} className='compView'>
//                 <IFrame doShow={showFlags.get('view')}>
//                     <Timer0 />
//                 </IFrame>

//                 <CodeView doShow={showFlags.get('html')} viewName={'html'}/>

//                 <CodeView doShow={showFlags.get('js')} viewName={'js'}/>

//                 <CodeView doShow={showFlags.get('css')} viewName={'css'}/>

//             </div>
            
//         </div>
//     );

// }








export default PageContainer;
