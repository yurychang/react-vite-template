import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  addTodo as addTodoApi,
  deleteTodo as deleteTodoApi,
  getTodos,
} from '@/apis';
import { useStore } from '@/store';

export function Home() {
  const bears = useStore.use.bears();
  const addBear = useStore.use.addBear();

  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos });

  // Mutations
  const addTodo = useMutation({
    mutationFn: addTodoApi,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const deleteTodo = useMutation({
    mutationFn: deleteTodoApi,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <>
      <div className="flex justify-center">
        <div>
          <h1 className="mt-8 text-xl">
            Nice to see you here! This is my react starter template. I hope you
            like it!
          </h1>
          <div className="mt-8">
            <h2 className="text-lg font-bold">Zustand example</h2>
            bears: {bears}
            <Button onClick={addBear}>add bear</Button>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-bold">React Query example</h2>
            <Button
              onClick={() => {
                addTodo.mutate('Do Laundry');
              }}
            >
              Add Todo
            </Button>
            <ul>
              {query.data?.map((todo) => (
                <li key={todo.id}>
                  {todo.title}{' '}
                  <Button
                    onClick={() => {
                      deleteTodo.mutate(todo.id);
                    }}
                  >
                    X
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function Button({ className, ...props }: any) {
  return (
    <button
      className={
        'px-3 ml-5 leading-7 text-white rounded cursor-pointer bg-neutral-400 ' +
        className
      }
      {...props}
    />
  );
}
