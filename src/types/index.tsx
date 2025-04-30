export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type AddEditTaskPayload = Pick<Task, "title" | "description">