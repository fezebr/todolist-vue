import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasksStore", {
  state: () => ({
    tasks: [
      { id: 1, text: "sleep", status: true },
      { id: 2, text: "programming", status: false },
      { id: 3, text: "run", status: false },
      { id: 4, text: "walk", status: true },
      { id: 5, text: "reading", status: true },
    ],
  }),

  getters: {
    allTasks: (state) => {
      return state.tasks;
    },
    completedTasks: (state) => {
      return state.tasks.filter((i) => i.status == true);
    },
    unCompletedTasks: (state) => {
      return state.tasks.filter((i) => i.status == false);
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    handleDeleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },
    handleStatus(taskId) {
      const todoIndex = this.tasks.findIndex((item) => item.id === taskId);
      this.tasks[todoIndex].status = !this.tasks[todoIndex].status;
    },
  },
});
