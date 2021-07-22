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
                    
                    :class="['nav-item nav-link font-weight-bold' , !doneStatus ? 'active' : '' ]"
                    
                    id="nav-home-tab"
                    @click="setStatus(false)"
                  >
                    undone
                    <span class="badge badge-secondary">{{tasks.filter((i) => i.status == false).length}}</span>
                  </a>
                  <a
                    :class="['nav-item nav-link font-weight-bold' , doneStatus ? 'active' : '' ]"
                    
                    id="nav-profile-tab"
                    @click="setStatus(true)"
                  >
                    done <span class="badge badge-success">{{tasks.filter((i) => i.status == true).length}}</span>
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

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

export default {
  methods: {
    ////// Add
    addTask(task) {
      this.tasks.push(task);
    },
    ///// delete
    handleDeleteTask(id) {
      this.tasks = this.tasks.filter((i) => i.id !== id);
    },
    ///// change tabs
    setStatus(status) {
      this.doneStatus = status;
      console.log(this.tasks);
    },
    ///// change status

    handleStatus(id) {
      console.log(id);
      const todoIndex = this.tasks.findIndex((item) => item.id === id);
      this.tasks[todoIndex].status = !this.tasks[todoIndex].status;
    },
    //edite task
    handleEditTask(id) {
      console.log(id);
      const todoIndex = this.tasks.findIndex((item) => item.id === id);
      this.tasks[todoIndex].editInput = !this.tasks[todoIndex].editInput;
    },

    
  },
  name: "App",
  components: {
    Header,
    AddTask,
    Tasks,
  },
  data() {
    return {
      tasks: [],
      doneStatus: false,
    };
  },
  created() {
    this.tasks = [
      { id: 1, text: "sleep", status: true ,editInput:false},
      { id: 2, text: "programming", status: false  ,editInput:false},
      { id: 3, text: "run", status: false  ,editInput:false},
      { id: 4, text: "walk", status: true ,editInput:false },
      { id: 5, text: "reading", status: true  ,editInput:false},
    ];
    console.log("create");
  },
 
};
</script>

<style>

</style>
