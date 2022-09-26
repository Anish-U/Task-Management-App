import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { Task } from './tasks.model';

import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasksHandler(): Task[] {
    return this.tasksService.getAllTasks();
  }
}
