import {useEffect, useRef, useState} from 'react';
import thingsAPI from '../api/thingsApi';
import { Data, Things } from '../interfaces/thingsInterface';

export const useThings = () =>{

    const delay = (ms: number | undefined) => new Promise((res) => setTimeout(res, ms));

    const [isLoading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    
    const[thingsPopular, setThingsPopular ] = useState<Things[]>([])
    //const nextPageUrl = useRef(`/search?sort=relevant&per_page=4&page=${page}&posted_after=now-2w`);
    
    const getThings = async(page: number) =>{
        await thingsAPI.get<Data>(`/search?sort=relevant&per_page=4&page=${page}&posted_after=now-2w`)
        .then((res) => {
            const things = res.data.hits;
            setThingsPopular((prevThings) => [...prevThings, ...things]);
            setLoading(false);
            console.log(res.data.hits);
        });
    }

    const reloadPage = () =>{
        const timerInterval = 5000;

        
        
        setTimeout(() => {
            setPage((prevPage) => prevPage + 1);
        }, timerInterval)
        
    }
    
    useEffect(() => {
        getThings(page);
      },[]);
    
    return {
        thingsPopular,
        isLoading,
    }
}