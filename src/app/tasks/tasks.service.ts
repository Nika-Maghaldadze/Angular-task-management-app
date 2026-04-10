import { Injectable } from '@angular/core';
import { type newTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Update user profile page',
      summary: 'Improve layout and add validation for user profile form fields',
      dueDate: '2024-06-10',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Fix navigation bug',
      summary:
        'Resolve issue where navbar does not update active link correctly',
      dueDate: '2024-06-12',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Implement authentication',
      summary: 'Add login and registration functionality with JWT handling',
      dueDate: '2024-06-18',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Optimize API calls',
      summary: 'Reduce redundant API requests and implement caching strategy',
      dueDate: '2024-06-20',
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Add error handling',
      summary: 'Create global error handler and display user-friendly messages',
      dueDate: '2024-06-22',
    },
    {
      id: 't7',
      userId: 'u1',
      title: 'Refactor shared components',
      summary: 'Break down large components into reusable smaller components',
      dueDate: '2024-06-25',
    },
    {
      id: 't8',
      userId: 'u2',
      title: 'Write integration tests',
      summary: 'Cover main user flows with integration tests',
      dueDate: '2024-06-27',
    },
    {
      id: 't9',
      userId: 'u3',
      title: 'Improve accessibility',
      summary: 'Ensure proper ARIA labels and keyboard navigation support',
      dueDate: '2024-06-28',
    },
    {
      id: 't10',
      userId: 'u4',
      title: 'Set up environment configs',
      summary:
        'Create separate configs for dev, staging, and production environments',
      dueDate: '2024-06-30',
    },
    {
      id: 't11',
      userId: 'u5',
      title: 'Implement pagination',
      summary: 'Add pagination to long lists for better performance and UX',
      dueDate: '2024-07-02',
    },
    {
      id: 't12',
      userId: 'u6',
      title: 'Add loading indicators',
      summary: 'Display spinners and skeletons during async operations',
      dueDate: '2024-07-04',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.tasks = JSON.parse(tasks);
    }

  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: newTaskData, userId:string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }

}
