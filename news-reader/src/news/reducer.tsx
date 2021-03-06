import {INewsState, NewsActionType} from "./types";
import {Reducer} from "redux";
import {NewsAction} from "./actions";


const initialState: INewsState =  {
    headlines: [],
    topHeadLines: [],
    newsLoading: false,
};

export const newsReducer: Reducer<INewsState, NewsAction> = (state = initialState, action) => {
    switch (action.type) {
        case NewsActionType.GET_ALL_NEWS_HEADLINES:
            return {
                ...state,
                headlines: [],
                newsLoading: true
            };
        case  `${NewsActionType.GET_ALL_NEWS_HEADLINES}_SUCCESS`:
            return {
                ...state,
                headlines: action.payload.data ? action.payload.data.sources: [],
                newsLoading: false
            };
        case  `${NewsActionType.GET_ALL_NEWS_HEADLINES}_FAILURE`:
            return {
                ...state,
                headlines: [],
                newsLoading: false
            };

        case  `${NewsActionType.GET_TOP_NEWS_HEADLINES}_SUCCESS`:
            return {
                ...state,
                topHeadLines: action.payload.data ? action.payload.data.articles: [],
                newsLoading: false
            };
        case  `${NewsActionType.GET_TOP_NEWS_HEADLINES}_FAILURE`:
            return {
                ...state,
                topHeadLines: [],
                newsLoading: false
            };
            default:
                return state;
    }
};
