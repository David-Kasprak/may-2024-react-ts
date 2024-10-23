import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {apiService} from "../services/api.service";

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        const page = query.get('page');
        if (page) {
            apiService.todo.getAll(+page)
        }
    }, [query]);

    const onClickPrevHandler = () => {

    };
    const onClickNextHandler = () => {
        const page = query.get('page');
        if (page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()})
        }
    };
    return (
        <div>
            <button onClick={onClickPrevHandler}>Previous</button>
            <button onClick={onClickNextHandler}>Next</button>
        </div>
    );
};

export default PaginationComponent;