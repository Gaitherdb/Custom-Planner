const Todo = require('../models/Todo');

function resetTodos() {
    console.log("daily reset")
    Todo.updateMany(
        { isComplete: true, repeat: true },
        { isComplete: false }
    ).exec();
}

module.exports = resetTodos;