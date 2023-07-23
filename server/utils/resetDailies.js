const Todo = require('../models/Todo');

function resetTodos() {
    Todo.updateMany(
        { isComplete: true, repeat: true },
        { isComplete: false }
    ).exec();
}

module.exports = resetTodos;