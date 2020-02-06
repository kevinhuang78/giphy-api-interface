import { Dispatch } from "redux";
import API from "../utils/API";

const GET_RANDOM_GIF_REQUEST = "GET_RANDOM_GIF_REQUEST";
const GET_RANDOM_GIF_SUCCESS = "GET_RANDOM_GIF_SUCCESS";
const GET_RANDOM_GIF_FAILURE = "GET_RANDOM_GIF_FAILURE";

export const gifConstants = {
    GET_RANDOM_GIF_REQUEST,
    GET_RANDOM_GIF_SUCCESS,
    GET_RANDOM_GIF_FAILURE
};

export const getRandomGif = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: gifConstants.GET_RANDOM_GIF_REQUEST });
        API.get("/random")
            .then(response => {
                const { data } = response.data;
                dispatch({
                    type: gifConstants.GET_RANDOM_GIF_SUCCESS,
                    data: {
                        id: data.id,
                        image_url: data.image_url,
                        title: data.title
                    }
                });
            })
            .catch(error =>
                dispatch({
                    type: gifConstants.GET_RANDOM_GIF_FAILURE,
                    data: error
                })
            );
    };
};
