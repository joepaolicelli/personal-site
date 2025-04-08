<script setup lang="ts">
import { motion, useTime, useTransform } from 'motion-v';

const nameTextRef = useTemplateRef('nameTextRef');
const nameTextBounding = reactive(useElementBounding(nameTextRef));

const picDivTop = ref('0px');
const picDivLeft = ref('0px');
const welcomeTextHeight = ref(0);

const gradientDiv = reactive({
  top: '0px',
  left: '0px',
  height: '90vh',
  width: '750px',
});

watch(nameTextBounding, (newBounding) => {
  picDivTop.value = `${newBounding.bottom - 366}px`;
  picDivLeft.value = `${newBounding.right + 32}px`;
  welcomeTextHeight.value = newBounding.height;

  gradientDiv.left = `${newBounding.left - 775}px`;
  console.log(newBounding.left);
  console.log(gradientDiv.left);
});

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: unknown) => {
    const delay = typeof i === 'number' ? i * 0.5 : 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const shape = {
  strokeWidth: 3,
  strokeLinecap: 'round',
  fill: 'transparent',
};

const time = useTime();
// const orbit = useTransform(time, [0, 4000], [0, 360], { clamp: false });
const orbitingIcon = {
  x: useTransform(
    () => Math.cos(((2 * Math.PI) / 25000) * (time.get() % 25000)) * 300,
  ),
  y: useTransform(
    () => Math.sin(((2 * Math.PI) / 25000) * (time.get() % 25000)) * 300,
  ),
};
</script>

<template>
  <div class="container mx-auto px-4 py-4">
    <div
      class="gradientDiv hidden md:block fixed -z-10"
      :style="gradientDiv"
    ></div>
    <div
      class="picDiv hidden md:block fixed w-fit bg-white"
      flex="~"
      border="2 rounded-2xl blue-300"
      shadow="lg blue-300/50"
      p="4"
    >
      <img src="public/me.jpg" class="max-h-[300px] rounded-2xl shadow-xl" />
    </div>
    <div class="w-fit md:h-[100vh] m-auto">
      <div class="flex flex-col justify-center h-full md:ml-[-100px] my-auto">
        <motion.svg
          width="1000"
          height="1000"
          viewBox="0 0 1000 1000"
          initial="hidden"
          animate="visible"
          class="hidden md:block absolute ml-[-50px] -z-50"
        >
          <motion.circle
            class="circle-path"
            cx="0"
            cy="500"
            r="300"
            stroke="oklch(80.9% 0.105 251.813 / 30%)"
            :variants="draw"
            :custom="1"
            :style="shape"
          />
        </motion.svg>
        <motion.div
          :style="orbitingIcon"
          text="3xl"
          class="i-logos-vue absolute ml-[-65px] -z-30"
        />
        <div
          class="w-fit bg-white"
          flex="~ col"
          font="kufam semibold"
          border="2 rounded-2xl blue-300"
          shadow="lg blue-300/50"
          p="x-5 t-7 b-4"
        >
          <div class="text-4xl md:text-8xl/28">Hi.</div>
          <div ref="nameTextRef" class="text-xl md:text-5xl/16 w-fit pl-1">
            I'm Joe Paolicelli,
          </div>
          <div class="text-xl md:text-5xl/16 pl-1">
            a Full Stack Developer.
          </div>
        </div>
        <div class="flex gap-5 py-5">
          <div>
            <a
              href="https://github.com/joepaolicelli"
              target="_blank"
              aria-label="GitHub"
              ><button
                type="button"
                text="3xl md:5xl"
                class="bg-white"
                border="4 rounded-xl"
                p="3"
                cursor="pointer"
              >
                <div class="i-logos-github-icon"></div>
              </button>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/joepaolicelli/"
              target="_blank"
              aria-label="LinkedIn"
              ><button
                type="button"
                text="3xl md:5xl"
                class="bg-white"
                border="4 rounded-xl"
                p="3"
                cursor="pointer"
              >
                <div class="i-logos-linkedin-icon"></div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-[65%_35%]"></div>
  </div>
</template>

<style>
body {
  background-color: #f9f9f9;
}
</style>

<style scoped>
.picDiv {
  top: v-bind(picDivTop);
  left: v-bind(picDivLeft);
}

.gradientDiv {
  background: linear-gradient(
    to left,
    transparent,
    transparent 1%,
    #f9f9f9 5%,
    #f9f9f9 0
  );
}
</style>
