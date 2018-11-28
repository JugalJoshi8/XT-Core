// Todo Model
class Todo {
    constructor(title, date) {
        const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        Todo.nextId++;
        this.id = Todo.nextId; // auto_increment
        this.title = title;
        this.completed = false;
        this.date = formattedDate;
    }
}
Todo.nextId = 0;

// Todo Service
class TodosService {
    constructor() {
        this.todos = [];
    }

    // add new todo with given title
    addTodo(title) {
        const todo = new Todo(title, new Date());
        this.todos.push(todo);
        return this.todos;
    }

    // edit todo of given id with new title
    editTodo(id, newTitle) {
        const todo = this.findTodo(id);
        if(todo) {
            todo.title = newTitle;
            return todo;
        }
    }

    // find todo based on todo id
    findTodo(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if(todo) {
            return todo;
        }
        else {
            console.log('Todo with this id doesnt exist');
        }
    }

    // mark todo as complete for given id
    completeTodo(id) {
        const todo = this.findTodo(id);
        if(todo) {
            todo.completed = true;
            return todo;
        }
    }

    // mark all todos as completed
    completeAll() {
        this.todos.forEach(todo => todo.completed = true);
        return this.todos;
    }

    // delete todo of gien id
    deleteTodo(id) {
        const todo = this.findTodo(id);
        if(todo) {
            const index = this.todos.indexOf(todo);
            this.todos.splice(index, 1);
            return this.todos;
        }
    }

    // mark all todos as uncompleted
    clearCompleted() {
        this.todos.forEach(todo => todo.completed = false);
        return this.todos;
    }

    // view todos with filter of completed or uncompleted
    viewTodos(filter) {
        const filterCompleted = filter === 'completed' ? true : false;
        return this.todos.filter((todo) => todo.completed === filterCompleted );
    }
}

// todo service instance
const service = new TodosService();

// api sample
service.addTodo('todo1');
service.addTodo('todo2');
service.addTodo('todo3');
service.completeTodo(3);
service.addTodo('todo4');