<template>
  <div
    class="d-flex justify-content-between align-items-center border rounded p-3"
  >
    <div>{{ task.text }}</div>
    <!-- <div>{{task.status}}</div> -->
    <div>
      <button type="button"
       class="btn btn-danger btn-sm ml-1"
       @click="$emit('delete-task',task.id)"
       >delete</button>
      <button type="button"
       class="btn btn-success btn-sm ml-1"
       @click="$emit('handle-status' , task.id)"
       >{{task.status ? 'unDone' : 'Done'}}</button>

       {{task.status}}
    </div>
  </div>
</template>

<script>
export default {
  props: ["task"],
  emits:['delete-task','handle-status']

};
</script>