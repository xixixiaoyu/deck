export interface Presentation {
  id: string
  title: string
  description: string
  route: string
  tags?: string[]
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  duration?: string
  lastUpdated?: string
  thumbnail?: string
}

export interface Category {
  id: string
  name: string
  description?: string
  icon?: string
  expanded?: boolean
  presentations: Presentation[]
  color?: string
}

export const categoriesConfig: Category[] = [
  {
    id: 'ai-tools',
    name: 'AI工具',
    description: 'AI编程工具全景与最佳实践',
    icon: 'code',
    expanded: true,
    color: 'indigo',
    presentations: [
      {
        id: 'ai-tools-panorama',
        title: '主流AI编程工具全景',
        description: '2026年4月主流AI编程工具全景整理，从代码补全到Agentic时代',
        route: '/ai-tools',
        tags: ['AI', '编程工具', 'Cursor', 'Copilot', 'Claude'],
        difficulty: 'intermediate',
        duration: '30分钟',
        lastUpdated: '2026-04-06',
      },
    ],
  },
  {
    id: 'llm',
    name: '大模型',
    description: '大型语言模型相关演示文稿',
    icon: 'brain',
    expanded: false,
    color: 'teal',
    presentations: [
      {
        id: 'llm-tutorial',
        title: '大模型教程',
        description: '全面介绍大模型的原理、训练、应用和最佳实践',
        route: '/llm',
        tags: ['大模型', 'AI', '深度学习'],
        difficulty: 'intermediate',
        duration: '45分钟',
        lastUpdated: '2024-01-15',
      },
    ],
  },
  {
    id: 'templates',
    name: '设计模板',
    description: '各种演示文稿设计模板和布局',
    icon: 'palette',
    expanded: false,
    color: 'purple',
    presentations: [
      {
        id: 'design-language-template',
        title: '设计语言模板',
        description: '包含多种幻灯片模板的设计系统',
        route: '/template',
        tags: ['设计', '模板', 'UI'],
        difficulty: 'beginner',
        duration: '30分钟',
        lastUpdated: '2024-01-10',
      },
    ],
  },
]

export const tagsList = [
  'AI',
  '编程工具',
  'Cursor',
  'Copilot',
  'Claude',
  '大模型',
  '深度学习',
  '设计',
  '模板',
  'UI',
]

export const difficulties = ['beginner', 'intermediate', 'advanced'] as const
export type Difficulty = (typeof difficulties)[number]

export const sortOptions = [
  { value: 'title', label: '按标题排序' },
  { value: 'difficulty', label: '按难度排序' },
  { value: 'duration', label: '按时长排序' },
  { value: 'lastUpdated', label: '按更新时间排序' },
] as const

export type SortOption = (typeof sortOptions)[number]['value']
