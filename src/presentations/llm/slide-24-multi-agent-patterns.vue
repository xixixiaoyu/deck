<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('patterns')
const activePattern = ref('hierarchical')

const patterns = [
  {
    id: 'sequential',
    label: 'Sequential (流水线)',
    icon: '➡️',
    desc: '任务按顺序传递，上一步输出是下一步输入。适合固定流程任务。',
  },
  {
    id: 'hierarchical',
    label: 'Hierarchical (层级式)',
    icon: '👑',
    desc: 'Manager 规划分发，Workers 并行/串行执行。适合复杂大型项目。',
  },
  {
    id: 'joint',
    label: 'Joint Chat (圆桌会)',
    icon: '💬',
    desc: '多专家自由讨论，互相修正，达成共识。适合创意和开放性问题。',
  },
]

const roles = [
  {
    title: 'Planner (规划者)',
    icon: '🗺️',
    desc: '分析意图，拆解任务 (ToT)，制定执行路径',
    color: 'bg-blue-50 border-blue-200 text-blue-800',
  },
  {
    title: 'Executor (执行者)',
    icon: '⚡',
    desc: '使用工具，专注执行特定领域子任务',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  },
  {
    title: 'Reviewer (评估者)',
    icon: '🔍',
    desc: '检查结果质量，提供反馈循环',
    color: 'bg-amber-50 border-amber-200 text-amber-800',
  },
  {
    title: 'Summarizer (总结者)',
    icon: '📝',
    desc: '汇总信息，消除冗余，生成最终报告',
    color: 'bg-blue-50 border-blue-200 text-blue-800',
  },
]
</script>

<template>
  <section class="container mx-auto max-w-7xl px-6 py-12 h-full flex flex-col">
    <div class="mb-8 text-center flex-shrink-0">
      <h2
        class="inline-block text-4xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600"
        style="letter-spacing: 0.025em; line-height: 1.2"
      >
        Multi-Agent 多智能体协作
      </h2>
      <p class="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
        从单打独斗到团队协作：通过角色分工解决复杂问题
      </p>
    </div>

    <!-- Main Navigation Tabs -->
    <div class="flex justify-center mb-8">
      <div class="bg-slate-100 p-1 rounded-xl flex gap-1">
        <button
          @click="activeTab = 'patterns'"
          class="px-6 py-2 rounded-lg font-medium transition-all duration-200"
          :class="
            activeTab === 'patterns'
              ? 'bg-white text-teal-600 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          "
        >
          协作模式 (Patterns)
        </button>
        <button
          @click="activeTab = 'roles'"
          class="px-6 py-2 rounded-lg font-medium transition-all duration-200"
          :class="
            activeTab === 'roles'
              ? 'bg-white text-teal-600 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          "
        >
          关键角色 (Roles)
        </button>
      </div>
    </div>

    <!-- Content Area -->
    <div class="flex-grow min-h-0 relative">
      <transition name="fade" mode="out-in">
        <!-- Tab 1: Patterns -->
        <div
          v-if="activeTab === 'patterns'"
          class="h-full grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <!-- Pattern Selector -->
          <div class="lg:col-span-1 flex flex-col gap-4">
            <button
              v-for="pattern in patterns"
              :key="pattern.id"
              @click="activePattern = pattern.id"
              class="text-left p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md"
              :class="
                activePattern === pattern.id
                  ? 'border-teal-500 bg-teal-50/50'
                  : 'border-slate-200 bg-white hover:border-teal-200'
              "
            >
              <div class="flex items-center gap-3 mb-2">
                <span class="text-2xl">{{ pattern.icon }}</span>
                <span class="font-bold text-slate-800">{{
                  pattern.label
                }}</span>
              </div>
              <p class="text-sm text-slate-600">{{ pattern.desc }}</p>
            </button>
          </div>

          <!-- Pattern Visualizer -->
          <div
            class="lg:col-span-2 bg-slate-50 rounded-3xl border border-slate-200 p-8 flex items-center justify-center relative overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]"
            ></div>

            <!-- Sequential Visualization -->
            <div
              v-if="activePattern === 'sequential'"
              class="flex items-center gap-4 relative z-10 animate-fade-in"
            >
              <div class="flex flex-col items-center">
                <div
                  class="w-16 h-16 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center text-2xl shadow-sm"
                >
                  👤
                </div>
                <span class="text-sm font-medium mt-2 text-slate-500"
                  >User</span
                >
              </div>
              <div class="w-8 h-0.5 bg-slate-400"></div>
              <div class="flex flex-col items-center">
                <div
                  class="w-20 h-20 rounded-2xl bg-blue-100 border-2 border-blue-400 flex items-center justify-center text-3xl shadow-lg"
                >
                  🤖 A
                </div>
                <span class="text-sm font-bold mt-2 text-blue-700"
                  >Research</span
                >
              </div>
              <div class="w-12 h-0.5 bg-slate-400 relative">
                <div
                  class="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-slate-400 rotate-45"
                ></div>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="w-20 h-20 rounded-2xl bg-blue-100 border-2 border-blue-400 flex items-center justify-center text-3xl shadow-lg"
                >
                  🤖 B
                </div>
                <span class="text-sm font-bold mt-2 text-blue-700">Write</span>
              </div>
              <div class="w-12 h-0.5 bg-slate-400 relative">
                <div
                  class="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-slate-400 rotate-45"
                ></div>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="w-20 h-20 rounded-2xl bg-amber-100 border-2 border-amber-400 flex items-center justify-center text-3xl shadow-lg"
                >
                  🤖 C
                </div>
                <span class="text-sm font-bold mt-2 text-amber-700"
                  >Review</span
                >
              </div>
            </div>

            <!-- Hierarchical Visualization -->
            <div
              v-if="activePattern === 'hierarchical'"
              class="flex flex-col items-center gap-8 relative z-10 animate-fade-in"
            >
              <div class="flex flex-col items-center relative">
                <div
                  class="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl shadow-xl z-10"
                >
                  👑
                </div>
                <span class="text-lg font-bold mt-2 text-blue-800"
                  >Manager / Planner</span
                >

                <!-- Lines to children -->
                <div
                  class="absolute top-1/2 left-1/2 w-[200px] h-24 border-l-2 border-r-2 border-b-0 border-blue-300 -translate-x-1/2 translate-y-4 -z-0"
                ></div>
                <div
                  class="absolute top-1/2 left-1/2 h-24 w-0.5 bg-blue-300 -translate-x-1/2 translate-y-4 -z-0"
                ></div>
              </div>

              <div class="flex gap-8">
                <div class="flex flex-col items-center">
                  <div
                    class="w-16 h-16 rounded-xl bg-white border-2 border-blue-200 flex items-center justify-center text-2xl shadow-md"
                  >
                    🔍
                  </div>
                  <span class="text-sm font-medium mt-1 text-slate-600"
                    >Search</span
                  >
                </div>
                <div class="flex flex-col items-center">
                  <div
                    class="w-16 h-16 rounded-xl bg-white border-2 border-blue-200 flex items-center justify-center text-2xl shadow-md"
                  >
                    💻
                  </div>
                  <span class="text-sm font-medium mt-1 text-slate-600"
                    >Code</span
                  >
                </div>
                <div class="flex flex-col items-center">
                  <div
                    class="w-16 h-16 rounded-xl bg-white border-2 border-blue-200 flex items-center justify-center text-2xl shadow-md"
                  >
                    🎨
                  </div>
                  <span class="text-sm font-medium mt-1 text-slate-600"
                    >Design</span
                  >
                </div>
              </div>
            </div>

            <!-- Joint Chat Visualization -->
            <div
              v-if="activePattern === 'joint'"
              class="relative w-80 h-80 flex items-center justify-center animate-fade-in"
            >
              <div
                class="absolute inset-0 rounded-full border-2 border-dashed border-slate-300 animate-spin-slow"
              ></div>

              <div
                class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              >
                <div
                  class="w-16 h-16 rounded-full bg-rose-100 border-2 border-rose-400 flex items-center justify-center text-2xl shadow-lg"
                >
                  👨‍⚕️
                </div>
                <span
                  class="text-xs font-bold mt-1 bg-white px-2 rounded-full shadow-sm"
                  >Doctor</span
                >
              </div>

              <div
                class="absolute bottom-0 right-0 translate-x-[-20%] translate-y-[-20%] flex flex-col items-center"
              >
                <div
                  class="w-16 h-16 rounded-full bg-cyan-100 border-2 border-cyan-400 flex items-center justify-center text-2xl shadow-lg"
                >
                  👨‍🔬
                </div>
                <span
                  class="text-xs font-bold mt-1 bg-white px-2 rounded-full shadow-sm"
                  >Scientist</span
                >
              </div>

              <div
                class="absolute bottom-0 left-0 translate-x-[20%] translate-y-[-20%] flex flex-col items-center"
              >
                <div
                  class="w-16 h-16 rounded-full bg-lime-100 border-2 border-lime-400 flex items-center justify-center text-2xl shadow-lg"
                >
                  👨‍⚖️
                </div>
                <span
                  class="text-xs font-bold mt-1 bg-white px-2 rounded-full shadow-sm"
                  >Ethicist</span
                >
              </div>

              <div
                class="bg-white/80 backdrop-blur p-4 rounded-2xl shadow-xl text-center max-w-[150px]"
              >
                <span class="text-2xl">💬</span>
                <p class="text-xs text-slate-500 font-medium mt-1">
                  Shared Context
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 2: Roles -->
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 gap-6 h-full content-center"
        >
          <div
            v-for="role in roles"
            :key="role.title"
            class="p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex gap-4 items-start bg-white/80 backdrop-blur-sm"
            :class="role.color"
          >
            <div class="text-4xl p-3 bg-white/50 rounded-xl shadow-sm">
              {{ role.icon }}
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">{{ role.title }}</h3>
              <p class="opacity-90 leading-relaxed">{{ role.desc }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-spin-slow {
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.bg-grid-slate-200 {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(226 232 240)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
}
</style>
