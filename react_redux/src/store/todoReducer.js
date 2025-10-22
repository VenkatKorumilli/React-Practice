import { v4 as uuidv4 } from 'uuid';

var initialState={
todos:[
{
title:"Cricket",
id:uuidv4()
},
{
title:"Tennis",
id:uuidv4()
},
]
}
export function todoReducer(state=initialState,action){
    if(action.type==='ADD_TODO'){
        return {...state,todos:[...state.todos,action.payload]}
    }
    if (action.type === "DELETE_TODO") {
            var temp = state.todos.filter((todo) => todo.id !== action.payload);
    return { ...state, todos: [...temp] };
}

return state
}

