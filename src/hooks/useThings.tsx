import {useEffect, useRef, useState} from 'react';
import thingsAPI from '../api/thingsApi';
import { Data, Things } from '../interfaces/thingsInterface';

export const useThings = () =>{

    const delay = (ms: number | undefined) => new Promise((res) => setTimeout(res, ms));

    const [isLoading, setLoading] = useState(true);
    
    const[thingsPopular, setThingsPopular ] = useState<Things[]>([])
    //const nextPageUrl = useRef(`/search?sort=relevant&per_page=4&page=${page}&posted_after=now-2w`);
    
    const getThings = async(page: number) =>{
        await thingsAPI.get<Data>(`/search?sort=relevant&per_page=4&page=${page}&posted_after=now-4w`)
        .then((res) => {
            const things = res.data.hits;
            setThingsPopular((prevThings) => [...prevThings, ...things]);
            setLoading(false);
            console.log(res.data.hits);
        });
    }
    
    /*useEffect(() => {
        getThings(1);
      },[]);
    */
    return {
        thingsPopular,
        isLoading,
        getThings
    }
}