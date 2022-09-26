import { Controller } from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common/decorators';
import { Task } from './tasks.model';

import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasksHandler(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTaskHandler(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    return this.tasksService.createTask(title, description);
  }
}
