import { useState, useEffect } from 'react'
import { getHouses } from '../services/getHouses';

export const useFetchHouses = () => {
    
    const [state, setState] = useState({
        data: {},
        loading: true
    });

    useEffect( () => {
        getHouses()
            .then( dataHouse => {
                setState({
                    data: dataHouse,
                    loading: false
                });
            })

    }, [])

    return state;

}


