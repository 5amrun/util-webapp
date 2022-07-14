import { createContext, useState } from "react";



// https://stackoverflow.com/questions/50502664/how-to-update-the-context-value-in-a-provider-from-the-consumer
const PageContext = createContext({
    currPage: null,
    setContextCurrPage: (currPage) => {} ,
    pageList: []
});


function PageContextProvider({children, defaultVal, pageList}) { // {children, other props...}
    const [currPage, setCurrPage] = useState(defaultVal);
    // {currPage: defaultVal, setCurrPage: (currPage) => {}, pageList: pageList}
    // console.log(setCurrPage);

    return (
        <PageContext.Provider value={{currPage: currPage, setContextCurrPage: setCurrPage, pageList: pageList}}>
            {children}
        </PageContext.Provider>
    );
};


export {PageContext, PageContextProvider};
