import { Controller } from '@nestjs/common';
import {
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common/decorators';

import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';

import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasksHandler(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTaskByIdHandler(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTaskHandler(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch('/:id/status')
  updateTaskStatusHandler(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Delete('/:id')
  deleteTaskHandler(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }
}
