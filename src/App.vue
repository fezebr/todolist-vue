<template>
  <body>
    <div class="App">
      <Header />
      <main>
        <section class="jumbotron">
          <AddTask />
        </section>
        <div class="todosList">
          <div class="container">
            <div class="d-flex flex-column align-items-center">
              <nav class="col-6 mb-3">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    :class="[
                      'nav-item nav-link font-weight-bold',
                      doneStatus === 'all' ? 'active' : '',
                    ]"
                    id="nav-home-tab"
                    @click="setStatus('all')"
                  >
                    all
                    <span class="badge badge-secondary">{{
                      allTasks.length
                    }}</span>
                  </a>
                  <a
                    :class="[
                      'nav-item nav-link font-weight-bold',
                      doneStatus === 'unCompletedTasks' ? 'active' : '',
                    ]"
                    id="nav-home-tab"
                    @click="setStatus('unCompletedTasks')"
                  >
                    undone
                    <span class="badge badge-secondary">{{
                      unCompletedTasks.length
                    }}</span>
                  </a>
                  <a
                    :class="[
                      'nav-item nav-link font-weight-bold',
                      doneStatus === 'completedTasks' ? 'active' : '',
                    ]"
                    id="nav-profile-tab"
                    @click="setStatus('completedTasks')"
                  >
                    done
                    <span class="badge badge-success">{{
                      completedTasks.length
                    }}</span>
                  </a>
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
          </div>
        </div>
      </main>
    </div>
  </body>
</template>

<script setup>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { ref } from "@vue/reactivity";
import { useTasksStore } from "./stores/tasks.store";
import { computed } from "@vue/runtime-core";
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

 
