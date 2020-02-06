import { gifConstants } from "../actions";

export interface IGifData {
    randomGif?: {
        id: string;
        image_url: string;
        title: string;
    };
}

const entities = (
    state: IGifData = {
        randomGif: undefined
    },
    action: any
): IGifData => {
    switch (action.type) {
        case gifConstants.GET_RANDOM_GIF_REQUEST:
            return {
                ...state,
                randomGif: undefined
            };
        case gifConstants.GET_RANDOM_GIF_SUCCESS:
            return {
                ...state,
                randomGif: action.data
            };
        case gifConstants.GET_RANDOM_GIF_FAILURE:
            return {
                ...state,
                randomGif: undefined
            };
        default:
            return state;
    }
};

export default entities;
