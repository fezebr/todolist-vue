<template>
  <body>
    <div class="App">
      <Header />
      <main>
        <section class="jumbotron">
          <AddTask @add-task="addTask" />
        </section>
        <div class="todosList">
          <div class="container">
            <div class="d-flex flex-column align-items-center">
              <nav class="col-6 mb-3">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    :class="[
                      'nav-item nav-link font-weight-bold',
                      !doneStatus ? 'active' : '',
                    ]"
                    id="nav-home-tab"
                    @click="setStatus(false)"
                  >
                    undone
                    <span class="badge badge-secondary">{{
                      tasks.filter((i) => i.status == false).length
                    }}</span>
                  </a>
                  <a
                    :class="[
                      'nav-item nav-link font-weight-bold',
                      doneStatus ? 'active' : '',
                    ]"
                    id="nav-profile-tab"
                    @click="setStatus(true)"
                  >
                    done
                    <span class="badge badge-success">{{
                      tasks.filter((i) => i.status == true).length
                    }}</span>
                  </a>
                </div>
              </nav>

              <Tasks
                :tasks="tasks.filter((i) => i.status === doneStatus)"
                @handle-status="handleStatus"
                @delete-task="handleDeleteTask"
                @edite-task="handleEditTask"
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

const tasks = ref([
  { id: 1, text: "sleep", status: true, editInput: false },
  { id: 2, text: "programming", status: false, editInput: false },
  { id: 3, text: "run", status: false, editInput: false },
  { id: 4, text: "walk", status: true, editInput: false },
  { id: 5, text: "reading", status: true, editInput: false },
]);
const doneStatus = ref(false);

////// Add
const addTask = (task) => tasks.value.push(task);

///// delete
const handleDeleteTask = (id) =>
  (tasks.value = tasks.value.filter((i) => i.id !== id));

///// change tabs
const setStatus = (status) => (doneStatus.value = status);

///// change status
const handleStatus = (id) => {
  const todoIndex = tasks.value.findIndex((item) => item.id === id);
  tasks.value[todoIndex].status = !tasks.value[todoIndex].status;
};
//edite task
const handleEditTask = (id) => {
  const todoIndex = tasks.value.findIndex((item) => item.id === id);
  tasks.value[todoIndex].editInput = !tasks.value[todoIndex].editInput;
};
</script>

 
