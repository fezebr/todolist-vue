<template>
  <div>
    <Header />
    <main class="md:w-1/2 md:mx-auto">
      <section>
        <AddTask />
      </section>
      <div class="p-10 md:p-0 mb-7">
        <nav class="flex justify-between">
          <div
            :class="[doneStatus === 'all' ? 'active' : '']"
            @click="setStatus('all')"
          >
            <span
              class="inline-flex items-center m-2 px-2 py-1 bg-blue-200 hover:bg-blue-300 rounded-full text-sm font-semibold text-blue-600"
            >
              <span> all </span>
              <span class="ml-1">
                {{ allTasks.length }}
              </span>
            </span>
          </div>
          <div
            :class="[doneStatus === 'unCompletedTasks' ? 'active' : '']"
            @click="setStatus('unCompletedTasks')"
          >
            <span
              class="inline-flex items-center m-2 px-2 py-1 bg-red-200 hover:bg-red-300 rounded-full text-sm font-semibold text-red-600"
            >
              <span> undone </span>
              <span class="ml-1">
                {{ unCompletedTasks.length }}
              </span>
            </span>
          </div>
          <div
            :class="[doneStatus === 'completedTasks' ? 'active' : '']"
            @click="setStatus('completedTasks')"
          >
            <span
              class="inline-flex items-center m-2 px-2 py-1 bg-green-200 hover:bg-green-300 rounded-full text-sm font-semibold text-green-600"
            >
              <span> done </span>
              <span class="ml-1">
                {{ completedTasks.length }}
              </span>
            </span>
          </div>
        </nav>

        <Tasks
          :tasks="
            doneStatus === 'all'
              ? allTasks
              : doneStatus === 'completedTasks'
              ? completedTasks
              : unCompletedTasks
          "
          @handle-status="handleStatus"
          @delete-task="handleDeleteTask"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import AddTask from "./components/AddTask.vue";
import Tasks from "./components/Tasks.vue";
import { ref } from "@vue/reactivity";
import { useTasksStore } from "./stores/tasks.store";
import { storeToRefs } from "pinia";

const doneStatus = ref("all");
const tasksStore = useTasksStore();
const { allTasks, unCompletedTasks, completedTasks } = storeToRefs(tasksStore);

///// delete
const handleDeleteTask = (id) => tasksStore.handleDeleteTask(id);

///// change tabs
const setStatus = (status) => {
  doneStatus.value = status;
};

// ///// change status
const handleStatus = (id) => tasksStore.handleStatus(id);

// // //edite task
// const handleEditTask = (id) => {
//   //   const todoIndex = tasks.value.findIndex((item) => item.id === id);
//   //   tasks.value[todoIndex].editInput = !tasks.value[todoIndex].editInput;
// };
</script>
