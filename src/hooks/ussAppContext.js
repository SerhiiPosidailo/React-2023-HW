import {useContext} from "react";

import {Context} from "../hoc/ContextProvider";


const useAppContext = () => {
    const [state, setState] = useContext(Context)
    return {
        episodeName: state,
        setEpisodeName: (value) => setState(value)
    }
}

export {
    useAppContext
}