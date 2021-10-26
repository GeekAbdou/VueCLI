<template>
  <section class="todo-app">
    <div class="container">
      <div class="todo">
        <div class="todo__control">
          <input
            v-model="inputTask"
            class="todo__control--task-text"
            placeholder="Your New Task"
            type="text"
          />
          <button @click.prevent="addTask" class="todo__control--add-task">
            Add Task
          </button>
          <button @click.prevent="deleteAll" class="todo__control--delete-all">
            Delete All
          </button>
        </div>
        <div
          class="todo__list"
          v-for="(taskV, index) in tasks"
          :key="(taskV.done, taskV.task)"
        >
          <div class="todo__list--item">
            <span
              class="todo__list--item-text"
              :style="{
                'background-color': taskV.done ? '#20c997' : '#fabc03',
              }"
              @click="taskV.done = !taskV.done"
              >{{ taskV.task }}</span
            >
            <span @click="deleteTask(index)" class="todo__list--item-delete"
              >Delete</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tasks: [],
      inputTask: "",
    };
  },

  methods: {
    addTask: function () {
      this.tasks.push({
        task: this.inputTask,
        done: false,
      });
      this.inputTask = "";
    },

    deleteAll: function () {
      this.tasks = [];
    },

    deleteTask: function (index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style scoped lang="scss">
.todo-app{
  border: 1px solid rgb(90, 168, 231);
}
.todo {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  width: 700px;
  .todo__control {
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;

    .todo__control--task-text {
      width: 450px;
      padding: 5px;
      font-size: 25px;
      border: none;
      background-color: #ddd;
    }
    .todo__control--task-text:focus {
      outline: none;
    }
    button {
      padding: 10px;
      border: none;
      color: white;
      margin: 0 auto;
    }
    .todo__control--add-task {
      background-color: #0d6efd;
    }
    .todo__control--delete-all {
      background-color: rgb(255, 51, 0);
      padding: 10px 30px;
    }
  }
  .todo__list {
    display: flex;
    flex-direction: column;
    width: 700px;
    .todo__list--item {
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .todo__list--item-text {
        flex-basis: 80%;
        padding: 10px 10px;
        background-color: #fabc03;
        font-size: 23px;
        color: black;
        cursor: pointer;
      }
      .todo__list--item-delete {
        flex-basis: 15%;
        padding: 10px 10px;
        background-color: rgb(255, 51, 0);
        text-align: center;
        font-size: 23px;
        color: white;
        cursor: pointer;
      }
    }
  }
}
</style>
