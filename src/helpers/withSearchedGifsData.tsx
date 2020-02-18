import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSearchedGifs } from "../actions";
import queryString from "query-string";

export default (Component: any) => (props: any) => {
    const parsedQuery: any = queryString.parse(props.location.search);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSearchedGifs(parsedQuery.search));
    }, [dispatch, parsedQuery.search]);
    return <Component {...props} />;
};
