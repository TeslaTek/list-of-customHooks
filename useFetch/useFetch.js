import { useEffect, useRef, useState } from "react"


export const useFetch = ([url, rollOn, mode]) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({ data:null, loading:true, error: null});
   
    useEffect(() => {
       
        return () => {
            isMounted.current = false;
         
        }
    }, [])

    const fetching = () =>{       
        setState({data: null, loading:true, error:null});
        fetch(url)
        .then( resp => resp.json())
        .then( data => {

            if (isMounted.current) {
                setState({
                    loading:false,
                    error:null,
                    data
                })    
            }else console.log('the componet is already unMounted');

        })
    }
   
    useEffect(() => {
        if (mode === 0) {fetching();}
    }, [url]);

    useEffect(() => {
        if ( mode === 1 ) {fetching();}
    }, [rollOn]);
 

    return state
}
