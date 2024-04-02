const zod = require('zod');

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string(),
    importance: zod.number().int().min(1).max(3)
});

const updateTodo = zod.object({
    id: zod.string()
});

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}

