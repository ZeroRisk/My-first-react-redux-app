export default function( state = null, action){
    switch(action.type){
        case "PAYMENT_SELECTED":
            return action.payload;
            break;
    }
    return state
}