import React, {useState, useEffect} from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

import {ITodo} from '../interfaces/interfaces';


export const TodoPage: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
      setTodos(saved);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
  
    const addHandler = (title: string): void => {
      console.log("Add new todo: ", title);
      const newTodo: ITodo = {
        title: title,
        id: Date.now(),
        completed: false
      }
      setTodos(prev => [newTodo, ...prev]);
    }
  
    const toggleHandler = (id: number) => {
      setTodos(prev => prev.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo
      }))
    }
  
    const removeHandler = (id: number) => {
      const shoudRemove = window.confirm("Do you want to delete the selected todo?");
      if(shoudRemove){
        setTodos(prev => prev.filter(todo => todo.id !== id))
      }
    }
  
    const defaultText = () => {
      return(
        <>
          <p className="center">Try adding todos...</p>
        </>
      );
    }
    return(
        <>
        <TodoForm onAdd={addHandler}/>
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
        </>
    );
}