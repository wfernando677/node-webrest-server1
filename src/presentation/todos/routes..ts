import { Router } from "express";
import { TodosController } from './controller';

export class TodosRoutes {
    constructor() {
    }

    static get routes(): Router {
        const router = Router();
        const todoController = new TodosController();
        // router.get('/api/todos', todoController.getTodos) ====  router.get('/api/todos',(req,res) => todoController.getTodos(req,res))


        router.get('/', todoController.getTodos);
        router.get('/:id', todoController.getTodoById);
        router.post('/', todoController.CreateTodo);
        router.put('/:id', todoController.UpdateTodo);
        router.delete('/:id', todoController.DeleteTodo);


        return router;
    }
}