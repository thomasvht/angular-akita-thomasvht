import {guid, ID} from '@datorama/akita';

export interface Todo {
  id: ID;
  title: string;
  completed: boolean;
}

/**
 * A factory function that creates Todo
 */
export function createTodo({title}: Partial<Todo>) {
  return {
    id: guid(),
    title,
    completed: false
  } as Todo;
}
