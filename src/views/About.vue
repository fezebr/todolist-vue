<template>
  <div>fezebr2000@gmail.com</div>
</template>

<script setup>
import { useGtag } from "vue-gtag";

const gtag = useGtag();

const sendTestEvent = () => {
  gtag("event", "test_event", {
    event_category: "debug",
    event_label: "VueGtag test event",
  });
};
</script>
