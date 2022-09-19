import React from 'react';
import {useJsonFetch} from "../../hooks/useJsonFetch.js";

const UseFetchTest = () => {
    const {request,error, loading} = useJsonFetch()
    const getSuccess = async () => {
       return await request('http://localhost:7070/data')
    }
    const getError = async () => {
       return await request('http://localhost:7070/erorr')
    }
    const getLoading = async () => {
       return await request('http://localhost:7070/loading')
    }
    return (
        <div>

            {error && <div> error !</div>}
            {loading && <div> Loading...</div>}
            {!error && !loading && <div style={{display:'flex',gap:20}}>
                <button onClick={getSuccess}>Success</button>
                <button onClick={getError}>Error</button>
                <button onClick={getLoading}>Loading</button>
            </div>}

        </div>
    );
};

export default UseFetchTest;