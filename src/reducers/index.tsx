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
            image_url:
                "https://media3.giphy.com/media/TvLuZ00OIADoQ/giphy.gif?cid=790b76118f3dd2ed1499aaa87b0eb3f759ca513fa707f471&rid=giphy.gif",
            title: "Loading"
        },
        searchedGifs: [
            {
                id: "123456789",
                image_url:
                    "https://media3.giphy.com/media/TvLuZ00OIADoQ/giphy.gif?cid=790b76118f3dd2ed1499aaa87b0eb3f759ca513fa707f471&rid=giphy.gif",
                title: "Loading"
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
                    image_url:
                        "https://media3.giphy.com/media/TvLuZ00OIADoQ/giphy.gif?cid=790b76118f3dd2ed1499aaa87b0eb3f759ca513fa707f471&rid=giphy.gif",
                    title: "Loading"
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
                    image_url:
                        "https://media1.giphy.com/media/mq5y2jHRCAqMo/giphy.gif?cid=790b7611ac8051612cad33f267b20f66165b8764727ff49f&rid=giphy.gif",
                    title: "Error"
                }
            };
        case gifConstants.GET_SEARCHED_GIFS_REQUEST:
            return {
                ...state,
                searchedGifs: [
                    {
                        id: "123456789",
                        image_url:
                            "https://media3.giphy.com/media/TvLuZ00OIADoQ/giphy.gif?cid=790b76118f3dd2ed1499aaa87b0eb3f759ca513fa707f471&rid=giphy.gif",
                        title: "Loading"
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
                        image_url:
                            "https://media1.giphy.com/media/mq5y2jHRCAqMo/giphy.gif?cid=790b7611ac8051612cad33f267b20f66165b8764727ff49f&rid=giphy.gif",
                        title: "Error"
                    }
                ]
            };
        default:
            return state;
    }
};

export default entities;
