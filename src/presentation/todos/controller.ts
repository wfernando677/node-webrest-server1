import { Request, Response } from "express"

const todos = [
    {id:1, text: 'Buy milk', completedAt: new Date()},
    {id:2, text: 'Buy Bread', completedAt: null},
    {id:3, text: 'Buy butter', completedAt: new Date()},
  ]
export class TodosController {
    constructor() {
    }

    public getTodos = (req:Request,res:Response) => {
       return res.json(todos)
    }

    public getTodoById = (req:Request,res:Response) => {
        const id = +req.params.id; //el más es para convertir a número    
        if (isNaN(id)) {
            return res.status(400).json({error:'ID armgument is not number'})
        }   
        const todo = todos.find(todo => todo.id===id);

        (todo)
          ? res.json(todo)
          : res.status(404).json({error:`TODO with id ${id} not found`})
    }

    public CreateTodo = (req:Request,res:Response) =>{
        const {text} = req.body;
        if(!text) return res.status(400).json({error:'Text property is requerid'});
        
        const newTodo = {
            id: todos.length+1,
            text: text,
            completedAt: null
        }
        todos.push(newTodo)
        res.json(newTodo);
    }
    public UpdateTodo = (req:Request,res:Response)=>{
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({error:'ID armgument is not number'})
        const todo = todos.find(todo => todo.id===id);
        if (!todo) return res.status(404).json({error:`Todo with id ${id} not found`})
        const {text,completedAt} = req.body;
        if(!text) return res.status(400).json({error:'Text property is requerid'});

        todo.text=text || todo.text;
        (completedAt==='null')
          ? todo.completedAt = null
          :todo.completedAt = new Date(completedAt || todo.completedAt)
        
        res.json(todo);
    }

    public DeleteTodo = (req:Request,res:Response) =>{
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({error:'ID armgument is not number'})
        
        const todo = todos.find(todo => todo.id===id);
        if (!todo) return res.status(404).json({error:`Todo with id ${id} not found`})
        
        todos.splice(todos.indexOf(todo),1);
        res.json(todo)

    }


}