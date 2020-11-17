const Todo = require('../models/todo.model')



// app.post('/', urlEncodedParser, async (req,res)=>{

// })

const addTask = async (request, response) => {

    try {
        const addtask = {
            task: request.body.task,
            date: request.body.date
        }
        const task = new Todo(addtask)
        const result = await task.save();
        if (!result) {
            return response.status(400).json({
                error: "Error in adding new task!",
            });
        }
        response.redirect('/');
    }
    catch (e) {
        return response.status(404).json({
            message: "Sayop!"
        })
    }
}

const getTask = async (request, response) => {
    try {
        const tasks = await Todo.find();
        if (!tasks) {
            return response.status(400).json({
                error: "Error in getting tasks!",
            });
        }

        response.render('index', { data: tasks });

    } catch (e) {
        return response.status(404).json({
            message: "Sayop123!"
        })

    }
}

const deleteTask = async (request, response) => {
    try{ 
        const id = request.body.id;
                const todoDeleted = await Todo.findByIdAndDelete(id);
                if(!todoDeleted) return response.status(400).json({message: "Somethings wrong!"});
                response.redirect('/');        
            
    }catch(e) {
        return response.status(404).json({
            message: "Error"
        })

    }
}

const updateTask = async(request, response) => {
    try{
        const id = request.params.id;
                const updatedTodo = await Todo.findByIdAndUpdate(id, request.body);
                if(!updatedTodo) return response.status(400).json({message: "Somethings wrong!"});
                response.redirect('/');  
            
    }catch (error) {
        response.status(500).json({message: error, error: true});
    }
}

module.exports = { addTask, getTask, deleteTask, updateTask }