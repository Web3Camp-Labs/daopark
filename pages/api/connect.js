import React, {useContext, useReducer} from 'react';

import reducer from './reducer';
import INIT_STATE from './initState';

const initState = {...INIT_STATE};

const DAOContext = React.createContext();


const DAOContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);
    console.log("=====state=====",state);

    return <DAOContext.Provider value={{state,dispatch}}>
        {props.children}
    </DAOContext.Provider>;
};

const useDAO = () => ({...useContext(DAOContext)});
export {DAOContextProvider, useDAO};
