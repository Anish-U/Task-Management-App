<p align="center">
  <img src="https://info.cegedim-healthcare.co.uk/hubfs/CHS_Tasks%20logo.png" width="400" alt="Task Management Logo" />
</p>

<h3 align="center">Task Management App using NestJS</h3>
<br />

## Installation

```bash
$ yarn install
```

----

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

----

## API Reference

#### Get tasks (includes filters and searches)

```http
  GET /tasks
  GET /tasks?status=${status}&search=${query}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `status` | `string` | Status of the task. **(Optional)** |
| `query`| `string`| Search term to search in **title** and **description** of tasks. **(Optional)**|


#### Get single task

```http
  GET /tasks/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of task to fetch |



#### Create new task

```http
  POST /tasks
```

| Body | Type     | Description                       |
| :--- | :------- | :-------------------------------- |
| `title` | `string` | **Required**. Title of task to create |
| `description` | `string` | **Required**. Description of task to create |


#### Delete a task

```http
  DELETE /tasks/:id
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of task to delete |


#### Update a tasks status

```http
  PATCH /tasks/:id/status
```

| Parameter/Body | Type     | Description                        |
| :------------- | :------- | :--------------------------------- |
| `id`           | `string` | **Required**. Id of task to update |
| `status`       | `string` | **Required**. status to be updated |

----