<template>
  <main class="lg:w-1/3 md:w-1/2 md:mx-auto">
    <section>
      <AddTask />
    </section>
    <div class="p-10 md:p-0 mb-7">
      <TasksTabs
        @setStatus="setStatus"
        :doneStatus="doneStatus"
        :allTasksLength="allTasks.length"
        :unCompletedTasksLength="unCompletedTasks.length"
        :completedTasksLength="completedTasks.length"
      />
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
</template>

<script setup>
import AddTask from "../components/AddTask.vue";
import Tasks from "../components/Tasks.vue";
import { ref } from "@vue/reactivity";
import { useTasksStore } from "../stores/tasks.store";
import { storeToRefs } from "pinia";
import TasksTabs from "../components/TasksTabs.vue";
import { useGtag } from "vue-gtag-next";

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

const gtag = useGtag();

const sendTestEvent = () => {
  gtag("event", "test_event", {
    event_category: "debug",
    event_label: "VueGtag test event",
  });
};

sendTestEvent();
</script>
