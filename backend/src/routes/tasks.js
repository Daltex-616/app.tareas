import { Router } from "express";
import {deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask} from "../controllers/tasks.js"

const router = Router()
/**
 * @swagger
 * /tasks:
 *  get:
 *    sumary: Obtiene todas las tareas
 */
router.get("/tasks", getTasks)
/**
 * @swagger
 * /tasks:
 *  get:
 *    sumary: Obtiene todas las tareas
 */

router.get("/tasks/count", getTaskCount)
/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Obtiene la cantidad de tareas
 */

router.get("/tasks/:id", getTask)

/**
 * @swagger
 * /tasks/:id:
 *  get:
 *    summary: Obtiene la tarea por su id
 */

router.post("/tasks/", saveTask)
/**
 * @swagger
 * /tasks/:
 *  post:
 *    summary: Crea nueva tarea
 */

router.delete("/tasks/:id", deleteTask)
/**
 * @swagger
 * /tasks/:id:
 *  delete:
 *    summary: borra una tarea
 */

router.put("/tasks/:id", updateTask)
/**
 * @swagger
 * /tasks/:id:
 *  put:
 *    summary: actualiza la tarea
 */

export default router