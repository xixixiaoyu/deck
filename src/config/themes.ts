export interface Theme {
  id: string
  name: string
  colors: {
    surface: string
    'surface-muted': string
    'text-primary': string
    'text-muted': string
    accent: string
    border: string
    highlight: string
  }
  icon?: string
}

export const themes: Theme[] = [
  {
    id: 'dark',
    name: '深色主题',
    icon: 'moon',
    colors: {
      surface: '17 24 39',
      'surface-muted': '30 41 59',
      'text-primary': '226 232 240',
      'text-muted': '148 163 184',
      accent: '99 102 241', // Indigo-500: 更具科技感与智能感的靛蓝色
      border: '71 85 105',
      highlight: '253 224 71',
    },
  },
  {
    id: 'light',
    name: '浅色主题',
    icon: 'sun',
    colors: {
      surface: '248 250 252',
      'surface-muted': '241 245 249',
      'text-primary': '15 23 42',
      'text-muted': '71 85 105',
      accent: '79 70 229', // Indigo-600: 在浅色背景下具备更好的易读性与专业感
      border: '226 232 240',
      highlight: '251 191 36',
    },
  },
  {
    id: 'blue',
    name: '蓝色主题',
    icon: 'droplet',
    colors: {
      surface: '15 23 42',
      'surface-muted': '30 41 59',
      'text-primary': '226 232 240',
      'text-muted': '148 163 184',
      accent: '59 130 246',
      border: '71 85 105',
      highlight: '251 191 36',
    },
  },
  {
    id: 'purple',
    name: '紫色主题',
    icon: 'sparkles',
    colors: {
      surface: '17 24 39',
      'surface-muted': '30 41 59',
      'text-primary': '226 232 240',
      'text-muted': '148 163 184',
      accent: '147 51 234',
      border: '71 85 105',
      highlight: '251 191 36',
    },
  },
  {
    id: 'green',
    name: '绿色主题',
    icon: 'leaf',
    colors: {
      surface: '17 24 39',
      'surface-muted': '30 41 59',
      'text-primary': '226 232 240',
      'text-muted': '148 163 184',
      accent: '34 197 94',
      border: '71 85 105',
      highlight: '251 191 36',
    },
  },
]

export const defaultTheme = themes[0]

export function applyTheme(theme: Theme): void {
  const root = document.documentElement
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value)
  })

  // 保存主题偏好到本地存储
  localStorage.setItem('preferred-theme', theme.id)
}

export function getSavedTheme(): string | null {
  return localStorage.getItem('preferred-theme')
}

export function getThemeById(id: string): Theme | undefined {
  return themes.find(theme => theme.id === id)
}
