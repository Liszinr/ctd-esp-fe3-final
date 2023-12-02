export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_CHARACTERS':
            return {...state, list: action.payload}
        case 'GET_CHARACTER': 
            return {...state, character: {}} 
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]} 
        case 'DELETE_FAV':
            return {} 
        case 'CHANGE_THEME':
            return {...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
        default:
            return state
    }
}