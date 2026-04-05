<script setup lang="ts">
import { onMounted, ref, type ComponentPublicInstance } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionsRef = ref<HTMLElement[]>([])
const skillChipsRef = ref<HTMLElement[]>([])
const isDark = ref(true)

const profile = {
  name: 'Senthilnathan S',
  role: 'Vue.js Frontend Developer',
  email: 'senthilnathan1737@gmail.com',
  phone: '+91 75022 83605',
  city: 'Chennai, India',
  objective:
    'Dedicated Web Developer with 4.5+ years of experience in Vue.js, Angular, and Tailwind CSS, building responsive and high-performance web applications that elevate user engagement.',
  experience: {
    company: 'CodiFi Soft Tech Private Limited',
    location: 'Chennai',
    period: 'Dec 2021 - Present',
    title: 'Web Developer',
    points: [
      'Built and maintained responsive web apps with Vue.js, Angular, TypeScript, HTML5, and CSS3.',
      'Implemented component-based architecture with robust state management for scalable products.',
      'Collaborated with UX/UI and product teams to turn wireframes into production-grade interfaces.',
      'Integrated APIs and services for real-time functionality and stronger user workflows.',
    ],
  },
  projects: [
    {
      name: 'IIFL Markets Web & ANT Web',
      summary:
        'Developed a full trading platform with Vue.js, Vuex, and Tailwind CSS including real-time market data, portfolio tracking, and performance analysis.',
      highlights: ['Razorpay integration', 'TradingView charting library', 'Advanced trader-friendly interface'],
    },
    {
      name: 'GoPocket Web @ Sky Broking',
      summary:
        'Built a customized trading app experience with market depth, order placement, portfolio monitoring, and investment analytics.',
      highlights: ['Client-tailored UX', 'Trading charts', 'Core trading workflows'],
    },
    {
      name: 'Admin Dashboard @ Alice Blue Financial Services',
      summary:
        'Created an admin dashboard with Vue.js + Vuex + Tailwind CSS for user management, reports, and trading activity visibility.',
      highlights: ['Chart views', 'Trade reports', 'User login insights'],
    },
    {
      name: 'Partner Portal @ Chola Securities',
      summary:
        'Led frontend development of a partner portal for broker-partner operations, performance tracking, and account opening flow monitoring.',
      highlights: ['Revenue tracking', 'Performance metrics', 'Client application lifecycle'],
    },
  ],
  skills: [
    'Vue.js',
    'Angular',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Vuex',
    'Axios',
    'API Integration',
    'Apache ECharts',
    'Vuetify',
    'Bootstrap',
    'Angular Material',
    'Node.js',
    'WebSocket',
    'MQTT',
    'GitHub',
  ],
  education: [
    'B.Sc Computer Science - Bharathiyar University, Erode (May 2019)',
    'HSC - Arignar Anna Government Higher Secondary School, Vellakovil, Tirupur (May 2016)',
  ],
  certification: 'Java Certification - Bosco Softech Pvt Ltd (2019)',
  languages: ['English', 'Tamil'],
}

const setSectionRef = (el: Element | ComponentPublicInstance | null) => {
  if (el instanceof HTMLElement && !sectionsRef.value.includes(el)) {
    sectionsRef.value.push(el)
  }
}

const setSkillRef = (el: Element | ComponentPublicInstance | null) => {
  if (el instanceof HTMLElement && !skillChipsRef.value.includes(el)) {
    skillChipsRef.value.push(el)
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('portfolio-theme')
  if (savedTheme === 'light') {
    isDark.value = false
  } else if (savedTheme === 'dark') {
    isDark.value = true
  }

  const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  introTl
    .from('.header-shell', { y: -18, opacity: 0, duration: 0.7 })
    .from('.hero-reveal', { y: 36, opacity: 0, stagger: 0.1, duration: 0.9 }, '-=0.4')
    .from('.hero-card', { x: 40, opacity: 0, duration: 0.9 }, '-=0.7')

  gsap.to('.floating-badge', {
    y: 16,
    duration: 2.4,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1,
  })

  sectionsRef.value.forEach((section) => {
    gsap.from(section, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 82%',
      },
    })
  })

  gsap.from(skillChipsRef.value, {
    scale: 0.7,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '#skills',
      start: 'top 78%',
    },
  })
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('portfolio-theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
  <div :class="['min-h-screen', isDark ? 'theme-dark bg-[#0b1220] text-slate-100' : 'theme-light bg-[#f3f7fc] text-slate-900']">
    <div
      :class="[
        'pointer-events-none fixed inset-0 -z-10',
        isDark
          ? 'bg-[radial-gradient(circle_at_10%_10%,rgba(29,78,216,0.28),transparent_24%),radial-gradient(circle_at_88%_24%,rgba(14,165,233,0.25),transparent_26%),radial-gradient(circle_at_50%_88%,rgba(236,72,153,0.18),transparent_30%),linear-gradient(150deg,#0b1220,#111a2f_46%,#0b1220)]'
          : 'bg-[radial-gradient(circle_at_14%_12%,rgba(56,189,248,0.25),transparent_26%),radial-gradient(circle_at_84%_22%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_52%_88%,rgba(236,72,153,0.12),transparent_30%),linear-gradient(150deg,#f3f7fc,#e7eef9_46%,#f8fbff)]',
      ]"
    ></div>

    <button
      :class="[
        'fixed right-4 top-4 z-50 inline-flex h-11 items-center gap-2 rounded-full border px-4 text-xs font-bold tracking-[0.08em] shadow-lg transition hover:-translate-y-0.5 md:right-8',
        isDark
          ? 'border-cyan-300/70 bg-[#0f1a2d] text-cyan-100 shadow-cyan-900/30'
          : 'border-slate-500/60 bg-[#0b1220] text-white shadow-slate-500/20',
      ]"
      @click="toggleTheme"
    >
      <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
        <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-16a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 17a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm10-8a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2ZM5 12a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h2Zm12.95-6.364a1 1 0 0 1 1.414 1.414l-1.414 1.415a1 1 0 0 1-1.414-1.415l1.414-1.414ZM7.464 16.536a1 1 0 0 1 1.414 1.414l-1.414 1.414a1 1 0 1 1-1.414-1.414l1.414-1.414Zm11.9 2.828a1 1 0 0 1-1.414 0l-1.414-1.414a1 1 0 1 1 1.414-1.414l1.414 1.414a1 1 0 0 1 0 1.414ZM8.879 7.465A1 1 0 0 1 7.464 8.88L6.05 7.464a1 1 0 1 1 1.414-1.414L8.88 7.464Z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
        <path d="M20.742 13.045A9 9 0 1 1 10.955 3.258a1 1 0 0 1 1.11 1.316A7 7 0 0 0 19.426 11.9a1 1 0 0 1 1.316 1.145Z" />
      </svg>
      {{ isDark ? 'LIGHT MODE' : 'DARK MODE' }}
    </button>

    <header :class="['header-shell sticky top-0 z-30 border-b backdrop-blur-xl', isDark ? 'border-white/10 bg-[#0b1220]/75' : 'border-slate-300/80 bg-[#f3f7fc]/80']">
      <nav class="mx-auto flex w-full max-w-6xl items-center gap-3 px-6 py-3 md:gap-4 md:px-10 md:py-4">
        <div
          :class="[
            'hidden w-full max-w-[460px] items-center rounded-full p-1 md:flex',
            isDark ? 'border border-white/10 bg-white/[0.04]' : 'border border-slate-300 bg-white/70',
          ]"
        >
          <a
            :class="[
              'inline-flex h-10 flex-1 items-center justify-center rounded-full px-4 py-2 font-body text-sm font-semibold leading-none transition',
              isDark ? 'text-cyan-200 hover:bg-white/10' : 'text-sky-700 hover:bg-slate-100',
            ]"
            href="#experience"
          >
            Experience
          </a>
          <a
            :class="[
              'inline-flex h-10 flex-1 items-center justify-center rounded-full px-4 py-2 font-body text-sm font-semibold leading-none transition',
              isDark ? 'text-slate-200 hover:bg-white/10 hover:text-cyan-200' : 'text-slate-700 hover:bg-slate-100 hover:text-sky-700',
            ]"
            href="#projects"
          >
            Projects
          </a>
          <a
            :class="[
              'inline-flex h-10 flex-1 items-center justify-center rounded-full px-4 py-2 font-body text-sm font-semibold leading-none transition',
              isDark ? 'text-slate-200 hover:bg-white/10 hover:text-cyan-200' : 'text-slate-700 hover:bg-slate-100 hover:text-sky-700',
            ]"
            href="#skills"
          >
            Skills
          </a>
        </div>
        <div class="ml-auto flex items-center gap-2 md:ml-0">
          <a
            class="rounded-full border border-cyan-300/50 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-[0.12em] text-cyan-200 transition hover:-translate-y-0.5 hover:border-cyan-200/80 hover:bg-cyan-400/20"
            :href="`mailto:${profile.email}`"
          >
            HIRE ME
          </a>
        </div>
      </nav>
    </header>

    <main class="mx-auto w-full max-w-6xl px-6 pb-16 pt-10 md:px-10 md:pt-16">
      <section id="about" class="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p class="hero-reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            <span class="h-2 w-2 rounded-full bg-cyan-300"></span>
            Available for Frontend Roles
          </p>
          <h1 class="hero-reveal mt-4 font-heading text-4xl font-extrabold leading-tight text-white md:text-6xl">
            {{ profile.name }}
            <span class="block bg-gradient-to-r from-cyan-300 via-sky-300 to-pink-300 bg-clip-text text-transparent">
              {{ profile.role }}
            </span>
          </h1>
          <p class="hero-reveal mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {{ profile.objective }}
          </p>
          <div class="hero-reveal mt-8 flex flex-wrap gap-3 text-sm">
            <a class="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:-translate-y-0.5 hover:bg-white/10" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
            <a class="rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:-translate-y-0.5 hover:bg-white/10" :href="`tel:${profile.phone.replace(/\s+/g, '')}`">{{ profile.phone }}</a>
            <p class="rounded-full border border-white/15 bg-white/5 px-4 py-2">{{ profile.city }}</p>
          </div>
        </div>

        <aside class="hero-card relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 shadow-[0_30px_80px_-35px_rgba(34,211,238,0.55)] backdrop-blur-sm">
          <div class="floating-badge absolute right-6 top-5 rounded-full border border-cyan-300/40 bg-cyan-300/15 px-3 py-1 text-xs font-semibold text-cyan-200">
            4.5+ Years Experience
          </div>
          <h2 class="font-heading text-lg font-bold text-white">Current Role</h2>
          <p class="mt-1 text-sm text-slate-300">{{ profile.experience.title }}</p>
          <p class="mt-4 text-sm font-semibold text-cyan-200">{{ profile.experience.company }}</p>
          <p class="text-sm text-slate-300">{{ profile.experience.location }} | {{ profile.experience.period }}</p>
          <ul class="mt-5 space-y-3 text-sm text-slate-200/90">
            <li v-for="point in profile.experience.points" :key="point" class="rounded-2xl border border-white/10 bg-white/5 p-3">
              {{ point }}
            </li>
          </ul>
        </aside>
      </section>

      <section id="experience" :ref="setSectionRef" class="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Experience Snapshot</p>
        <h2 class="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">Building Fintech & Trading Interfaces at Scale</h2>
        <p class="mt-5 max-w-4xl leading-relaxed text-slate-300">
          Specialized in creating high-trust user experiences for trading products where speed, clarity, and real-time behavior matter most.
          I focus on responsive architecture, component reuse, and smooth API-driven interactions across desktop and mobile.
        </p>
      </section>

      <section id="projects" :ref="setSectionRef" class="mt-20">
        <div class="flex items-end justify-between gap-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Selected Work</p>
            <h2 class="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">Project Highlights</h2>
          </div>
        </div>

        <div class="mt-8 grid gap-5 md:grid-cols-2">
          <article
            v-for="project in profile.projects"
            :key="project.name"
            class="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40"
          >
            <h3 class="font-heading text-xl font-bold text-white">{{ project.name }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-slate-300">{{ project.summary }}</p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="tag in project.highlights"
                :key="tag"
                class="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200"
              >
                {{ tag }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" :ref="setSectionRef" class="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-10">
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Core Stack</p>
        <h2 class="mt-3 font-heading text-3xl font-bold text-white md:text-4xl">Skills & Technologies</h2>
        <div class="mt-7 flex flex-wrap gap-3">
          <span
            v-for="skill in profile.skills"
            :key="skill"
            :ref="setSkillRef"
            class="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"
          >
            {{ skill }}
          </span>
        </div>
      </section>

      <section :ref="setSectionRef" class="mt-20 grid gap-5 md:grid-cols-2">
        <article class="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Education</p>
          <ul class="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
            <li v-for="item in profile.education" :key="item" class="rounded-2xl border border-white/10 bg-white/5 p-3">{{ item }}</li>
          </ul>
        </article>

        <article class="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">Certification & Languages</p>
          <p class="mt-4 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">{{ profile.certification }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="lang in profile.languages"
              :key="lang"
              class="rounded-full border border-pink-300/40 bg-pink-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-pink-200"
            >
              {{ lang }}
            </span>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>
