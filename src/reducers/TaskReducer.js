function TaskReducer(state=[], action){
	if(action.type === "ADD_TASK"){
		var newState = [...state]
		newState.push(action.payload)
		return newState /////must return newstate if you actually want anything to happen
	}else{
		return state
	}
}

export default TaskReducer