import {Task} from "../types";

const generateRandomId = (): string => {
  return Math.random().toString(36).substring(2, 9);
}

export const mockTasks: Task[] = [
  {
    id: generateRandomId(),
    title: "Buy groceries",
    description: "Purchase milk, eggs, and bread from the store.",
    completed: false,
    createdAt: new Date("2023-10-01T10:00:00Z"),
    updatedAt: new Date("2023-10-01T10:00:00Z"),
  },
  {
    id: generateRandomId(),
    title: "Clean the house",
    description: "Vacuum and dust all rooms.",
    completed: true,
    createdAt: new Date("2023-10-02T12:00:00Z"),
    updatedAt: new Date("2023-10-03T08:00:00Z"),
  },
  {
    id: generateRandomId(),
    title: "Finish project report",
    description: "Complete the final draft of the project report.",
    completed: false,
    createdAt: new Date("2023-10-04T09:00:00Z"),
    updatedAt: new Date("2023-10-04T09:00:00Z"),
  },
  {
    id: generateRandomId(),
    title: "Call mom",
    description: "Check in with mom and see how she is doing.",
    completed: true,
    createdAt: new Date("2023-10-05T15:00:00Z"),
    updatedAt: new Date("2023-10-05T16:00:00Z"),
  },
  {
    id: generateRandomId(),
    title: "Schedule dentist appointment",
    description: "Book a check-up appointment with the dentist.",
    completed: false,
    createdAt: new Date("2023-10-06T11:00:00Z"),
    updatedAt: new Date("2023-10-06T11:00:00Z"),
  },
  {
    id: generateRandomId(),
    title: "Plan weekend trip",
    description: "Research and plan activities for the weekend getaway.",
    completed: false,
    createdAt: new Date("2023-10-07T14:00:00Z"),
    updatedAt: new Date("2023-10-07T14:00:00Z"),
  },
  {
    id: generateRandomId(),
    title: "Pay utility bills",
    description: "Pay electricity and water bills online.",
    completed: true,
    createdAt: new Date("2023-10-08T09:30:00Z"),
    updatedAt: new Date("2023-10-08T10:00:00Z"),
  },
  {
    id: generateRandomId(),
    title: "Read a book",
    description: "Finish reading the current chapter of the book.",
    completed: false,
    createdAt: new Date("2023-10-09T18:00:00Z"),
    updatedAt: new Date("2023-10-09T18:00:00Z"),
  },
  {
    id: generateRandomId(),
    title: "Exercise",
    description: "Do a 30-minute workout session.",
    completed: true,
    createdAt: new Date("2023-10-10T07:00:00Z"),
    updatedAt: new Date("2023-10-10T07:30:00Z"),
  },
  {
    id: generateRandomId(),
    title: "Prepare presentation",
    description: "Create slides for the upcoming meeting.",
    completed: false,
    createdAt: new Date("2023-10-11T13:00:00Z"),
    updatedAt: new Date("2023-10-11T13:00:00Z"),
  },
];