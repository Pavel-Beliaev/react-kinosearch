import React, {FC, useCallback, useEffect, useState} from 'react';
import debounce from "lodash.debounce";
import {useAppDispatch, useAppSelector} from "../../../../Store/store";
import {setSearchValue} from "../../../../Store/movies/slice";
import './search.scss'
import {CustomInput} from "../../../../components";
export const Search:FC = () => {
    const dispatch = useAppDispatch();

    const {searchValue} = useAppSelector(state => state.movies)

    const [isValue, setIsValue] = useState('');

    const debounceChangeInput = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str))
        }, 1000),
        []
    )
    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsValue(event.target.value);
        debounceChangeInput(event.target.value);
        sessionStorage.setItem('searchResults', JSON.stringify(event.target.value));
    }
    const cleanInput = () => {
        dispatch(setSearchValue(''))
        setIsValue('')
        sessionStorage.setItem('searchResults', JSON.stringify(''));
    }

    useEffect(() => {
        const storedResults = sessionStorage.getItem('searchResults');

        if (storedResults) {
            setIsValue(JSON.parse(storedResults));
        }
    }, []);

    return (
        <div className='search'>
            <CustomInput
                value={isValue}
                onChange={changeInput}
                placeholder='Type to search'
            />
            <i className='fa fa-search'></i>
            {searchValue &&
                <span onClick={cleanInput}>
                    Clean
                </span>
            }
        </div>
    );
};