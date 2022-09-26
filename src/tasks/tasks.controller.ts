import { Controller } from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common/decorators';

import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';

import { TasksService } from './tasks.service';
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasksHandler(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTaskHandler(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
