import { Dispatch } from "redux";
import API from "../utils/API";

const GET_RANDOM_GIF_REQUEST = "GET_RANDOM_GIF_REQUEST";
const GET_RANDOM_GIF_SUCCESS = "GET_RANDOM_GIF_SUCCESS";
const GET_RANDOM_GIF_FAILURE = "GET_RANDOM_GIF_FAILURE";

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

const GET_SEARCHED_GIFS_REQUEST = "GET_SEARCHED_GIFS_REQUEST";
const GET_SEARCHED_GIFS_SUCCESS = "GET_SEARCHED_GIFS_SUCCESS";
const GET_SEARCHED_GIFS_FAILURE = "GET_SEARCHED_GIFS_FAILURE";

export const getSearchedGifs = (search: string) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: gifConstants.GET_SEARCHED_GIFS_REQUEST });
        API.get("/search", {
            params: {
                limit: 9,
                offset: 0,
                q: search
            }
        })
            .then(response => {
                const { data } = response.data;
                dispatch({
                    type: gifConstants.GET_SEARCHED_GIFS_SUCCESS,
                    data:
                        data && data.length > 0
                            ? data.map((d: any) => ({
                                  id: d.id,
                                  image_url: d.images.downsized_large.url,
                                  title: d.title
                              }))
                            : []
                });
            })
            .catch(error =>
                dispatch({
                    type: gifConstants.GET_SEARCHED_GIFS_FAILURE,
                    data: error
                })
            );
    };
};

export const gifConstants = {
    GET_RANDOM_GIF_REQUEST,
    GET_RANDOM_GIF_SUCCESS,
    GET_RANDOM_GIF_FAILURE,
    GET_SEARCHED_GIFS_REQUEST,
    GET_SEARCHED_GIFS_SUCCESS,
    GET_SEARCHED_GIFS_FAILURE
};
