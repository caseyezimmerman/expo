function AddTask(task){
	console.log(task)
	return{
		type: "ADD_TASK",
		payload: task
	}
}

export default AddTask