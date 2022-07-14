import { useContext } from 'react';

import {PageContext, PageContextProvider} from '../../context.js';
import './Sidebar0.css'



function PageLi(props){
    let page = useContext(PageContext);

    const doClick = (e) => {
        e.preventDefault();
        
        console.log(e.target.name);
        page.currPage = e.target.name;
        page.setContextCurrPage(e.target.name);
    }

    if (page.currPage == props.page){
        return (<li className={'sidebar0ActiveLi'}><a href='#' name={props.page} onClick={(e) => doClick(e)}>&#8594; {props.page}</a></li>);
    }
    return (<li name={props.page}><a href='#' name={props.page} onClick={(e) => doClick(e)}>{props.page}</a></li>);
}


function Sidebar0() {
    let {currPage, setContextCurrPage, pageList} = useContext(PageContext);
    const pRange = [...Array(pageList.length).keys()]; // for the keys

    return (
        <div className='sidebar0'>
            <ul>
                {pRange.map((p) => <PageLi key={p} page={pageList[p]} />)}
            </ul>
        </div>
    );
}

export default Sidebar0;
