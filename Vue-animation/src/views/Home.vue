<template>
  <div class="home">
    <Todos @badValue="triggerToast" />
    <transition name="toast">
      <Toast v-if="showToast" />
    </transition>

    <transition name="fade">
      <div v-if="showP">Hello from Paragraph.</div>
    </transition>
    <button @click="showP = !showP">toggle</button>
  </div>
</template>

<script>
import { ref } from "vue";
import Toast from "../components/Toast";
import Todos from "../components/Todos";

export default {
  components: { Toast, Todos },
  setup() {
    const showToast = ref(false);
    const showP = ref(false);

    const triggerToast = () => {
      showToast.value = true;
      setTimeout(() => (showToast.value = false), 1000);
    };

    return { showToast, triggerToast, showP };
  },
};
</script>

<style>
/* Enter Fade*/
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 2s ease;
}
/*Leave Fade*/
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: all 1s linear;
}

/*ُEnter taost*/
/* .toast-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
} */
.toast-enter-active {
  /*   transition: all 0.5s ease; */
  animation: wobble 1s ease;
}
@keyframes wobble {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  50% {
    transform: translateY(0px);
    opacity: 1;
  }
  60% {
    transform: translateY(15px);
    opacity: 1;
  }
  70% {
    transform: translateY(-8px);
    opacity: 1;
  }
  80% {
    transform: translateY(10px);
    opacity: 1;
  }
  90% {
    transform: translateY(-4px);
    opacity: 1;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
/*Leave toast*/
/* .toast-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
} */
.toast-leave-active {
  transition: all 1s linear;
}
</style>
