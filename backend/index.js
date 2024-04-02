const express = require ('express');
const { createTodo, updateTodo } = require('./types');
const { tODO } = require('./db');
const cors = require('cors');

const app = express()
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent za wrong input"
        });
        return;
    }

    await tODO.create({
        title: createPayload.title,
        description: createPayload.description,
        importance: createPayload.importance,
        completed: createPayload.completed 
    });

    res.json({
        msg: "todo created"
    });
})

app.get('/todos',  async (req,res) => {
    const todos = await tODO.find({});

    res.send({
        todos
    });
});

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent za wronf input"
        })
        return;
    }

    await tODO.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked completed"
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});