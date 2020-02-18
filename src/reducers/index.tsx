import { gifConstants } from "../actions";

export interface IGifData {
    randomGif: {
        id: string;
        image_url: string;
        title: string;
    };
    searchedGifs: [
        {
            id: string;
            image_url: string;
            title: string;
        }
    ];
}

const entities = (
    state: IGifData = {
        randomGif: {
            id: "123456789",
            image_url: "http://placecorgi.com/260/180",
            title: "Corgi"
        },
        searchedGifs: [
            {
                id: "123456789",
                image_url: "http://placecorgi.com/260/180",
                title: "Corgi"
            }
        ]
    },
    action: any
): IGifData => {
    switch (action.type) {
        case gifConstants.GET_RANDOM_GIF_REQUEST:
            return {
                ...state,
                randomGif: {
                    id: "123456789",
                    image_url: "http://placecorgi.com/260/180",
                    title: "Corgi"
                }
            };
        case gifConstants.GET_RANDOM_GIF_SUCCESS:
            return {
                ...state,
                randomGif: action.data
            };
        case gifConstants.GET_RANDOM_GIF_FAILURE:
            return {
                ...state,
                randomGif: {
                    id: "123456789",
                    image_url: "http://placecorgi.com/260/180",
                    title: "Corgi"
                }
            };
        case gifConstants.GET_SEARCHED_GIFS_REQUEST:
            return {
                ...state,
                searchedGifs: [
                    {
                        id: "123456789",
                        image_url: "http://placecorgi.com/260/180",
                        title: "Corgi"
                    }
                ]
            };
        case gifConstants.GET_SEARCHED_GIFS_SUCCESS:
            return {
                ...state,
                searchedGifs: action.data
            };
        case gifConstants.GET_SEARCHED_GIFS_FAILURE:
            return {
                ...state,
                searchedGifs: [
                    {
                        id: "123456789",
                        image_url: "http://placecorgi.com/260/180",
                        title: "Corgi"
                    }
                ]
            };
        default:
            return state;
    }
};

export default entities;
