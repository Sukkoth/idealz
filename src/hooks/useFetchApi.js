import axios from 'axios'
import {useState, useEffect, useCallback} from 'react'

function useFetchApi(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`http://localhost:4000/${url}`);
            setData(res.data);
        } catch (error) {
            setError(error?.message || 'Error Fetching');
        } finally {
            setIsLoading(false);
        }
    }, [url]);
    

    useEffect(() => {
        fetchData()
    }, [fetchData])

  return {data, isLoading, error}
}

export default useFetchApi