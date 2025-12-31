import { pool } from "../../config/db";


// Record <string, unknown> = {key: value}
const createTodo = async (payload : Record<string,unknown>) =>{
    const {user_id, tittle} = payload;
    const result = await pool.query(`INSERT INTO todos(user_id, tittle) VALUES ($1,$2) RETURNING *`,[user_id,tittle])

    return result;
}

const getAllTodo = async()=>{
    const result = await pool.query(`SELECT * FROM todos`);
    return result;
}

const getSingleTodo = async(id:string) =>{
    const result = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
    return result;
}

const updateTodo = async(tittle:string,completed:string,id:string)=>{
        const result = await pool.query(
      "UPDATE todos SET tittle=$1, completed=$2 WHERE id=$3 RETURNING *",
      [tittle, completed,id]
    );
    return result;
}

const deleteTodo = async(id: string) =>{
        const result = await pool.query(
      "DELETE FROM todos WHERE id=$1 RETURNING *",
      [id]
    );
    return result;

}

export const TodoServices = {
    createTodo,
    getAllTodo,
    getSingleTodo,
    updateTodo,
    deleteTodo,

}