import {useEffect, useState} from 'react';
import thingsAPI from '../api/thingsApi';
import { Data, Things } from '../interfaces/thingsInterface';

export const useThings = () =>{

    const [isLoading, setLoading] = useState(true);
    
    const[thingsPopular, setThingsPopular ] = useState<Things[]>([])
    
    const getThings = async() =>{
        const resp = await thingsAPI.get<Data>('/search?sort=relevant&per_page=4&page=1&posted_after=now-1M');
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