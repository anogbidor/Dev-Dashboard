export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  demoLink: string
  codeLink: string
  date: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Markdown Editor',
    description: 'A simple markdown editor built with React and Zustand.',
    tags: ['React', 'Zustand', 'TypeScript'],
    image: '/images/markdown.png',
    demoLink: 'https://example.com/demo1',
    codeLink: 'https://github.com/user/demo1',
    date: '2024-04-01',
  },
  {
    id: '2',
    title: 'Pomodoro Timer',
    description: 'Track productivity with a custom timer app.',
    tags: ['React', 'Tailwind'],
    image: '/images/pomodoro.png',
    demoLink: 'https://example.com/demo2',
    codeLink: 'https://github.com/user/demo2',
    date: '2024-03-22',
  },
  // Add more projects...
]
