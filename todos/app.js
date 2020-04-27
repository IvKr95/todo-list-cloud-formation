const api = require('lambda-api')();
const TODOS = [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
}]

const getTodos = () => {
    return TODOS;
}

const getTodo = (id) => {
    return TODOS.find(t => t.id === id)
}

api.get('/todos', (req, res) => {
    try {
        const todos = getTodos();
        res.json({todos})
    } catch (error) {
        res.error('Internal Server Error')
    } 
})

api.get('/todos/:todoId', (req, res) => {
    try {
        const todo = getTodo(Number(req.params.todoId));
        res.json({todo})
    } catch (error) {
        res.error('Internal Server Error')
    } 
})

exports.lambdaHandler = async (event, context) => {
    return await api.run(event, context)
};
