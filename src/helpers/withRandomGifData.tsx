import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRandomGif } from "../actions";

export default (Component: React.FC) => (props: any) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRandomGif());
    }, [dispatch]);
    return <Component {...props} />;
};
