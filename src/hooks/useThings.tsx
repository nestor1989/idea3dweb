import {useEffect, useState} from 'react';
import thingsAPI from '../api/thingsApi';
import { Data, Things } from '../interfaces/thingsInterface';

export const useThings = () =>{

    const [isLoading, setLoading] = useState(true);
    
    const[thingsPopular, setThingsPopular ] = useState<Things[]>([])
    
    const getThings = async() =>{
        const resp = await thingsAPI.get<Data>('/search?/page=1');
        const things = resp.data.hits;
        setThingsPopular(things);
        setLoading(false);
    }
    
    useEffect(() => {
        getThings();
    }, [])
    
    return {
        thingsPopular,
        isLoading
    }
}