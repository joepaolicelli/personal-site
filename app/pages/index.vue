<script setup lang="ts">
import { motion, useTime, useTransform } from 'motion-v';

// Picture placement and sizing.
const nameTextRef = useTemplateRef('nameTextRef');
const nameTextBounding = reactive(useElementBounding(nameTextRef));

const showPic = ref(false);
const picDivTop = ref('0px');
const picDivLeft = ref('0px');
const welcomeTextHeight = ref(0);

const gradientDiv = reactive({
  top: '0px',
  left: '0px',
  height: '100vh',
  width: '750px',
});

watch(nameTextBounding, (newBounding) => {
  picDivTop.value = `${newBounding.bottom - 366}px`;
  picDivLeft.value = `${newBounding.right + 32}px`;
  welcomeTextHeight.value = newBounding.height;
  showPic.value = true;

  gradientDiv.left = `${newBounding.left - 775}px`;
});

// Orbit and orbiting icons.
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: unknown) => {
    const delay = typeof i === 'number' ? i * 0.1 : 0.1;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, ease: 'easeInOut', duration: 3, bounce: 0 },
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

// Inelegant to repeat this, but prevents warnings from putting the
// useTransform compostable inside a function.
// Inner
const tailwindOrbit = {
  x: useTransform(
    () =>
      Math.cos(((2 * Math.PI) / 25000) * ((time.get() + 19000) % 25000)) * 250,
  ),
  y: useTransform(
    () =>
      Math.sin(((2 * Math.PI) / 25000) * ((time.get() + 19000) % 25000)) * 250,
  ),
};
const dockerOrbit = {
  x: useTransform(
    () =>
      Math.cos(((2 * Math.PI) / 25000) * ((time.get() + 5000) % 25000)) * 250,
  ),
  y: useTransform(
    () =>
      Math.sin(((2 * Math.PI) / 25000) * ((time.get() + 5000) % 25000)) * 250,
  ),
};
// Middle
const tsOrbit = {
  x: useTransform(
    () =>
      Math.cos(((2 * Math.PI) / 30000) * ((time.get() + 7000) % 30000)) * 350,
  ),
  y: useTransform(
    () =>
      Math.sin(((2 * Math.PI) / 30000) * ((time.get() + 7000) % 30000)) * 350,
  ),
};
const pythonOrbit = {
  x: useTransform(
    () =>
      Math.cos(((2 * Math.PI) / 30000) * ((time.get() + 19000) % 30000)) * 350,
  ),
  y: useTransform(
    () =>
      Math.sin(((2 * Math.PI) / 30000) * ((time.get() + 19000) % 30000)) * 350,
  ),
};
const vueOrbit = {
  x: useTransform(
    () => Math.cos(((2 * Math.PI) / 30000) * (time.get() % 30000)) * 350,
  ),
  y: useTransform(
    () => Math.sin(((2 * Math.PI) / 30000) * (time.get() % 30000)) * 350,
  ),
};
// Outer
const nodeOrbit = {
  x: useTransform(
    () =>
      Math.cos(((2 * Math.PI) / 39000) * ((time.get() + 1000) % 39000)) * 450,
  ),
  y: useTransform(
    () =>
      Math.sin(((2 * Math.PI) / 39000) * ((time.get() + 1000) % 39000)) * 450,
  ),
};
const postgresOrbit = {
  x: useTransform(
    () =>
      Math.cos(((2 * Math.PI) / 39000) * ((time.get() + 10000) % 39000)) * 450,
  ),
  y: useTransform(
    () =>
      Math.sin(((2 * Math.PI) / 39000) * ((time.get() + 10000) % 39000)) * 450,
  ),
};
const nuxtOrbit = {
  x: useTransform(
    () =>
      Math.cos(((2 * Math.PI) / 39000) * ((time.get() + 21000) % 39000)) * 450,
  ),
  y: useTransform(
    () =>
      Math.sin(((2 * Math.PI) / 39000) * ((time.get() + 21000) % 39000)) * 450,
  ),
};
const ubuntuOrbit = {
  x: useTransform(
    () =>
      Math.cos(((2 * Math.PI) / 39000) * ((time.get() + 32000) % 39000)) * 450,
  ),
  y: useTransform(
    () =>
      Math.sin(((2 * Math.PI) / 39000) * ((time.get() + 32000) % 39000)) * 450,
  ),
};

const experienceWith = [
  {
    category: 'Frontend',
    techs: [
      { name: 'TypeScript', icon: 'i-logos-typescript-icon' },
      { name: 'JavaScript', icon: 'i-logos-javascript' },
      { name: 'Vue.js', icon: 'i-logos-vue' },
      { name: 'Nuxt', icon: 'i-logos-nuxt-icon' },
      { name: 'React', icon: 'i-logos-react' },
      { name: 'Next.js', icon: 'i-logos-nextjs-icon' },
      { name: 'TailwindCSS', icon: 'i-logos-tailwindcss-icon' },
      { name: 'NaiveUI', icon: 'i-logos-naiveui' },
      { name: 'Bootstrap', icon: 'i-logos-bootstrap' },
    ],
  },
  {
    category: 'Backend',
    techs: [
      { name: 'TypeScript', icon: 'i-logos-typescript-icon' },
      { name: 'JavaScript', icon: 'i-logos-javascript' },
      { name: 'Node.js', icon: 'i-logos-nodejs' },
      { name: 'Python', icon: 'i-logos-python' },
      { name: 'PostgreSQL', icon: 'i-logos-postgresql' },
      { name: 'MySQL', icon: 'i-logos-mysql' },
      { name: 'Elasticsearch', icon: 'i-logos-elasticsearch' },
    ],
  },
  {
    category: 'Infrastructure',
    techs: [
      { name: 'AWS', icon: 'i-logos-aws' },
      { name: 'AWS EC2', icon: 'i-logos-aws-ec2' },
      { name: 'AWS ECS', icon: 'i-logos-aws-ecs' },
      { name: 'AWS Lambda', icon: 'i-logos-aws-lambda' },
      { name: 'Docker', icon: 'i-logos-docker-icon' },
      { name: 'Terraform', icon: 'i-logos-terraform-icon' },
      { name: 'Ubuntu', icon: 'i-logos-ubuntu' },
      { name: 'Redhat', icon: 'i-logos-redhat-icon' },
    ],
  },
  {
    category: 'Misc.',
    techs: [
      { name: 'GitHub Actions', icon: 'i-logos-github-actions' },
      { name: 'Jenkins', icon: 'i-logos-jenkins' },
      { name: 'WebdriverIO', icon: 'i-logos-webdriverio' },
      { name: 'Mocha', icon: 'i-logos-mocha' },
      { name: 'Chai', icon: 'i-logos-chai' },
      { name: 'Prettier', icon: 'i-logos-prettier' },
      { name: 'ESLint', icon: 'i-logos-eslint' },
    ],
  },
];

const hoveredTech = ref('');
</script>

<template>
  <div class="container mx-auto px-4 py-4">
    <!-- Gradient to allow orbit and icons to gracefully fade out. -->
    <div
      class="gradientDiv hidden md:block fixed -z-10"
      :style="gradientDiv"
    ></div>
    <!-- Picture -->
    <Transition
      enter-active-class="transition-all duration-1000"
      enter-from-class="opacity-0 translate-y--5"
      enter-to-class="opacity-100"
      mode="out-in"
    >
      <div
        v-if="showPic"
        class="picDiv hidden md:block fixed w-fit bg-white"
        flex="~"
        border="2 rounded-2xl blue-300"
        shadow="lg blue-300/50"
        p="4"
      >
        <img src="public/me.jpg" class="max-h-[300px] rounded-2xl shadow-xl" />
      </div>
    </Transition>
    <div class="w-fit md:h-[100vh] md:min-h-[800px] m-auto">
      <div class="flex flex-col justify-center h-full md:ml-[-100px] my-auto">
        <!-- Orbits -->
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
            r="250"
            stroke="oklch(80.9% 0.105 251.813 / 30%)"
            :variants="draw"
            :custom="1"
            :style="shape"
          />
          <motion.circle
            class="circle-path"
            cx="0"
            cy="500"
            r="350"
            stroke="oklch(80.9% 0.105 251.813 / 30%)"
            :variants="draw"
            :custom="1"
            :style="shape"
          />
          <motion.circle
            class="circle-path"
            cx="0"
            cy="500"
            r="450"
            stroke="oklch(80.9% 0.105 251.813 / 30%)"
            :variants="draw"
            :custom="1"
            :style="shape"
          />
        </motion.svg>
        <!-- Orbiting Icons -->
        <motion.div
          v-for="i of [
            { style: tailwindOrbit, icon: 'i-logos-tailwindcss-icon' },
            { style: dockerOrbit, icon: 'i-logos-docker-icon' },
            { style: tsOrbit, icon: 'i-logos-typescript-icon' },
            { style: pythonOrbit, icon: 'i-logos-python' },
            { style: vueOrbit, icon: 'i-logos-vue' },
            { style: nodeOrbit, icon: 'i-logos-nodejs' },
            { style: postgresOrbit, icon: 'i-logos-postgresql' },
            { style: nuxtOrbit, icon: 'i-logos-nuxt-icon' },
            { style: ubuntuOrbit, icon: 'i-logos-ubuntu' },
          ]"
          :key="i.icon"
          :style="i.style"
          :initial="{ opacity: 0 }"
          :animate="{
            opacity: 1,
            transition: { opacity: { delay: 2.5, duration: 4 } },
          }"
          text="3xl"
          class="hidden md:block absolute ml-[-65px] -z-30"
          :class="i.icon"
        />
        <!-- Intro text. -->
        <div
          class="w-[80vw] md:w-fit bg-white text-center md:text-left"
          flex="~ col "
          font="kufam semibold"
          border="2 rounded-2xl blue-300"
          shadow="lg blue-300/50"
          p="x-5 t-7 b-4"
        >
          <div class="text-4xl md:text-8xl/28">Hi.</div>
          <div ref="nameTextRef" class="text-xl md:text-5xl/16 md:w-fit pl-1">
            I'm Joe Paolicelli,
          </div>
          <div class="text-xl md:text-5xl/16 pl-1">
            a Full Stack Developer.
          </div>
        </div>
        <!-- Links -->
        <div class="flex gap-5 py-5 self-center md:self-start">
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
        <!-- About Me Arrow -->
        <div
          class="hidden absolute self-center bottom-px p-5 -z-1"
          flex="md:~"
          gap="2"
          text="xl"
          font="armata"
        >
          About Me
          <div
            class="i-solar-double-alt-arrow-down-line-duotone text-2xl self-end"
          ></div>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-[2fr_1fr] gap-3">
      <div
        flex="~ wrap"
        gap="x-7 y-8 md:y-5"
        border="2 rounded-2xl blue-300"
        bg="gray-50"
        shadow="lg blue-300/50"
        p="3"
      >
        <div class="text-lg" font="armata">
          <p class="py-2">
            I'm a <strong>Full Stack web developer</strong> who enjoys
            integrating all the parts of a complex system together as much as I
            enjoy spending time on the little details to make sure they're just
            right.
          </p>
          <p class="py-2">
            In my work, I've taken on roles from
            <strong>web app design and development</strong>, to improving
            <strong>observability and automation</strong> in large scale data
            pipelines, to team <strong>leadership</strong>, to developing
            services to configure and secure deployments to
            <strong>cloud infrastructure</strong>.
          </p>
          <p class="py-2">
            The result is that I've developed a robust set of skills in all
            layers of the web development software stack, and a passion for
            using those skills to <strong>create new things</strong> and
            <strong>solve complex problems</strong>.
          </p>
        </div>
        <div class="text-md text-center" font="armata">
          Some of the many languages, frameworks, libraries, and technologies
          I've worked with:
        </div>
        <div
          v-for="cat of experienceWith"
          :key="cat.category"
          class="flex flex-wrap gap-3 text-3xl"
        >
          <div font="kufam semibold">{{ cat.category }}</div>
          <div
            v-for="tech of cat.techs"
            :key="tech.icon"
            :aria-label="tech.name"
            :class="tech.icon"
            @mouseover="hoveredTech = tech.name"
            @mouseleave="hoveredTech = ''"
          ></div>
        </div>
        <div class="flex justify-end self-end grow min-w-16 min-h-12">
          <div class="text-xl" font="armata">{{ hoveredTech }}</div>
        </div>
      </div>
      <div flex="~ col" gap="3">
        <div
          flex="~ col grow"
          border="2 rounded-2xl blue-300"
          bg="gray-50"
          shadow="lg blue-300/50"
          p="3"
        >
          <div font="kufam semibold">WORK EXPERIENCE</div>
          <div class="grow content-center">
            <div flex="~ col" gap="3" class="text-center">
              <motion.div
                :style="{ position: 'absolute' }"
                :initial="{ opacity: 0, x: -50, y: -50 }"
                :while-in-view="{
                  opacity: 0.1,
                  x: 0,
                  y: 0,
                  rotate: -10,
                  transition: { duration: 0.6 },
                }"
              >
                <img src="public/vannevar-labs.svg" class="h-24" />
              </motion.div>
              <div class="place-center font-bold z-10">Vannevar Labs</div>
              <div class="z-10">Forward Deployed Engineer</div>
              <div flex="~ wrap" gap="3" class="justify-center z-10">
                <div>Remote</div>
                <div class="italic">2025</div>
              </div>
            </div>
            <div flex="~ col" gap="3" class="text-center" m="t-6">
              <motion.div
                :style="{ position: 'absolute' }"
                :initial="{ opacity: 0, x: -50, y: -50 }"
                :while-in-view="{
                  opacity: 0.1,
                  x: 0,
                  y: 0,
                  rotate: -10,
                  transition: { duration: 0.6, delay: 0.3 },
                }"
              >
                <img src="public/nasa-meatball.svg" class="h-24" />
              </motion.div>
              <div class="place-center font-bold z-10">
                NASA Jet Propulsion Laboratory
              </div>
              <div class="z-10">Software Systems Engineer</div>
              <div flex="~ wrap" gap="3" class="justify-center z-10">
                <div>Pasadena, CA</div>
                <div class="italic">2017 - 2024</div>
              </div>
            </div>
          </div>
        </div>
        <div
          flex="~ col grow"
          border="2 rounded-2xl blue-300"
          bg="gray-50"
          shadow="lg blue-300/50"
          p="3"
        >
          <div font="kufam semibold">EDUCATION</div>
          <div class="grow content-center py-3">
            <div flex="~ col" class="text-center" gap="3">
              <motion.div
                :style="{ position: 'absolute' }"
                :initial="{ opacity: 0, x: -50, y: -50 }"
                :while-in-view="{
                  opacity: 0.1,
                  x: 12,
                  y: 0,
                  rotate: -10,
                  transition: { duration: 0.6, delay: 0.6 },
                }"
              >
                <img src="public/gw-logo.png" class="h-24" />
              </motion.div>
              <div class="z-10">
                <strong>The George Washington University</strong>
              </div>
              <div class="z-10">
                <i>Bachelor of Science, Computer Science</i>
              </div>
              <div flex="~ wrap" gap="3" class="justify-center z-10">
                <div>Washington, D.C.</div>
                <div class="italic">2013 - 2017</div>
              </div>
            </div>
          </div>
        </div>
        <div
          flex="~ col grow"
          border="2 rounded-2xl blue-300"
          bg="gray-50"
          shadow="lg blue-300/50"
          p="3"
        >
          <div font="kufam semibold">RESUME</div>
          <div class="grow content-center py-3 text-sky-600 hover:underline">
            <NuxtLink to="/resume.pdf" target="_blank" external>
              <div flex="~ justify-center" gap="2" text="xl center">
                <div
                  class="i-solar-document-text-line-duotone text-2xl self-end"
                ></div>
                Download my resume.
                <div
                  class="i-solar-document-text-line-duotone text-2xl self-end"
                ></div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div
      border="2 rounded-2xl blue-300"
      bg="gray-50"
      shadow="lg blue-300/50"
      m="t-3"
      p="3"
      text="lg center"
      font="armata"
    >
      <p>
        <strong
          >I'm currently looking for my next role, on-site in New York, or
          remote.</strong
        >
      </p>
      <p>
        Tell me about your project, and my future part in it, at joe@jo<span
          class="hidden"
          >preventEmailScraping</span
        >epaolicelli.com.
      </p>
    </div>
  </div>
</template>

<style>
body {
  background-color: #f9fafb;
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
    #f9fafb 5%,
    #f9fafb 0
  );
}
</style>
