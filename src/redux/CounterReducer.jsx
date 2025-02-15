
const initialValue = {
    count: 0
}

export const CounterReducer = (state = initialValue, action) =>{
    switch(action.type){
        case "INC":
            return{
                count:state.count + 1
            }
        case "DEC":
            return{
                count:state.count - 1
            }
        default: {
            return initialValue
        }
    }
}