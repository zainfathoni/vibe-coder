import type { Idea } from '../types'

export const ideas: Idea[] = [
  // Beginner ideas
  {
    id: 'todo-basic',
    title: 'Simple Todo List',
    shortDescription: 'Build a basic todo app with add, complete, and delete',
    fullDescription: 'Create a simple todo list application where users can add tasks, mark them as complete, and delete them. Focus on understanding React state management and event handling.',
    timeEstimate: '1-2 hours',
    difficulty: 'beginner',
    stack: ['React', 'useState'],
    features: [
      'Add new todos with text input',
      'Mark todos as complete (checkbox)',
      'Delete todos',
      'Show count of remaining items',
    ],
    learningGoals: [
      'useState for managing lists',
      'Handling form submissions',
      'Array methods (map, filter)',
      'Conditional styling',
    ],
  },
  {
    id: 'counter-app',
    title: 'Interactive Counter',
    shortDescription: 'A counter with increment, decrement, and reset',
    fullDescription: 'Build an interactive counter that lets users increment, decrement, and reset a number. Add visual feedback and optional step size configuration.',
    timeEstimate: '30-60 min',
    difficulty: 'beginner',
    stack: ['React', 'Tailwind'],
    features: [
      'Increment and decrement buttons',
      'Reset button',
      'Display current count with large number',
      'Optional: configurable step size',
    ],
    learningGoals: [
      'Basic useState',
      'Event handling with onClick',
      'Button styling',
      'Component structure',
    ],
  },
  {
    id: 'profile-card',
    title: 'Profile Card Component',
    shortDescription: 'Design a reusable profile card with props',
    fullDescription: 'Create a beautiful profile card component that displays user information. Practice passing props and creating reusable components.',
    timeEstimate: '45-90 min',
    difficulty: 'beginner',
    stack: ['React', 'Tailwind', 'Props'],
    features: [
      'Display avatar, name, and bio',
      'Social media links',
      'Hover effects',
      'Responsive design',
    ],
    learningGoals: [
      'Props and component reusability',
      'TypeScript interfaces for props',
      'Tailwind styling',
      'Layout with flexbox',
    ],
  },
  {
    id: 'color-picker',
    title: 'Color Picker Tool',
    shortDescription: 'Pick colors and copy hex codes to clipboard',
    fullDescription: 'Build a color picker that lets users select colors and copy the hex code to their clipboard. Great for practicing state and browser APIs.',
    timeEstimate: '1-2 hours',
    difficulty: 'beginner',
    stack: ['React', 'Clipboard API'],
    features: [
      'Color input for selection',
      'Display selected color preview',
      'Show hex code',
      'Copy to clipboard button',
    ],
    learningGoals: [
      'Controlled inputs',
      'Clipboard API',
      'User feedback (copied!)',
      'Input types',
    ],
  },
  {
    id: 'quote-generator',
    title: 'Random Quote Generator',
    shortDescription: 'Display random quotes with a refresh button',
    fullDescription: 'Create a quote generator that displays random inspirational quotes. Include a button to fetch a new quote and optional share functionality.',
    timeEstimate: '1 hour',
    difficulty: 'beginner',
    stack: ['React', 'Array methods'],
    features: [
      'Display quote and author',
      'New quote button',
      'Nice typography',
      'Optional: tweet quote button',
    ],
    learningGoals: [
      'Working with data arrays',
      'Random selection logic',
      'Typography styling',
      'External links',
    ],
  },

  // Intermediate ideas
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    shortDescription: 'Build a weather app with live API data',
    fullDescription: 'Build a real-time weather dashboard that fetches data from a public API and displays current conditions and forecasts.',
    timeEstimate: '2-3 hours',
    difficulty: 'intermediate',
    stack: ['React', 'Tailwind', 'Fetch API'],
    features: [
      'Current weather display with icons',
      '5-day forecast view',
      'Location search',
      'Temperature unit toggle (C/F)',
    ],
    learningGoals: [
      'API integration',
      'Async/await and useEffect',
      'Loading and error states',
      'Data transformation',
    ],
  },
  {
    id: 'markdown-notes',
    title: 'Markdown Note Taker',
    shortDescription: 'Create notes with live markdown preview',
    fullDescription: 'Create a note-taking app with a split view showing markdown input on one side and rendered preview on the other.',
    timeEstimate: '2-3 hours',
    difficulty: 'intermediate',
    stack: ['React', 'Markdown parser', 'localStorage'],
    features: [
      'Split view editor/preview',
      'Multiple notes support',
      'Auto-save to localStorage',
      'Note titles and search',
    ],
    learningGoals: [
      'Third-party library integration',
      'localStorage persistence',
      'Split pane layouts',
      'Text area handling',
    ],
  },
  {
    id: 'habit-tracker',
    title: 'Habit Tracker',
    shortDescription: 'Track daily habits with streak visualization',
    fullDescription: 'Build a habit tracking app where users can add habits and track their daily completion. Show streaks and completion history.',
    timeEstimate: '2-4 hours',
    difficulty: 'intermediate',
    stack: ['React', 'localStorage', 'Date handling'],
    features: [
      'Add/remove habits',
      'Daily check-off',
      'Streak counter',
      'Calendar/grid view of history',
    ],
    learningGoals: [
      'Date manipulation',
      'Complex state structures',
      'localStorage with JSON',
      'Grid layouts',
    ],
  },
  {
    id: 'pomodoro-timer',
    title: 'Pomodoro Timer',
    shortDescription: 'Productivity timer with work/break cycles',
    fullDescription: 'Create a Pomodoro timer with customizable work and break durations. Include notifications and session tracking.',
    timeEstimate: '2-3 hours',
    difficulty: 'intermediate',
    stack: ['React', 'setInterval', 'Notifications API'],
    features: [
      'Countdown timer display',
      'Work/short break/long break modes',
      'Start, pause, reset controls',
      'Browser notifications',
    ],
    learningGoals: [
      'setInterval in React',
      'Timer state management',
      'Browser Notifications API',
      'Cleanup with useEffect',
    ],
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    shortDescription: 'Track income and expenses with categories',
    fullDescription: 'Build an expense tracking app with categories, running balance, and visual charts showing spending breakdown.',
    timeEstimate: '3-4 hours',
    difficulty: 'intermediate',
    stack: ['React', 'Chart.js', 'localStorage'],
    features: [
      'Add income/expense transactions',
      'Category selection',
      'Running balance display',
      'Pie chart of expenses by category',
    ],
    learningGoals: [
      'Form handling with multiple fields',
      'Chart library integration',
      'Data aggregation',
      'Financial calculations',
    ],
  },

  // Advanced ideas
  {
    id: 'kanban-board',
    title: 'Kanban Board',
    shortDescription: 'Drag-and-drop task management board',
    fullDescription: 'Build a Trello-style Kanban board with draggable cards, multiple columns, and persistent storage.',
    timeEstimate: '4-6 hours',
    difficulty: 'advanced',
    stack: ['React', 'dnd-kit', 'localStorage'],
    features: [
      'Multiple columns (Todo, In Progress, Done)',
      'Drag and drop cards between columns',
      'Add/edit/delete cards',
      'Persist board state',
    ],
    learningGoals: [
      'Drag and drop libraries',
      'Complex state with nested data',
      'Optimistic UI updates',
      'Accessibility in DnD',
    ],
  },
  {
    id: 'chat-interface',
    title: 'Real-time Chat UI',
    shortDescription: 'Build a chat interface with message history',
    fullDescription: 'Create a modern chat interface with message bubbles, timestamps, typing indicators, and message history. Can be connected to a real backend later.',
    timeEstimate: '3-5 hours',
    difficulty: 'advanced',
    stack: ['React', 'WebSocket (mock)', 'Tailwind'],
    features: [
      'Message input and send',
      'Message bubbles with timestamps',
      'Typing indicator',
      'Auto-scroll to new messages',
    ],
    learningGoals: [
      'Chat UI patterns',
      'Scroll management',
      'Real-time update simulation',
      'Message threading',
    ],
  },
  {
    id: 'code-editor',
    title: 'Mini Code Editor',
    shortDescription: 'Syntax-highlighted code editor with preview',
    fullDescription: 'Build a code editor with syntax highlighting for HTML/CSS/JS and a live preview pane showing the rendered output.',
    timeEstimate: '4-6 hours',
    difficulty: 'advanced',
    stack: ['React', 'Monaco Editor', 'iframe'],
    features: [
      'Tabbed HTML/CSS/JS editors',
      'Syntax highlighting',
      'Live preview in iframe',
      'Code saving/loading',
    ],
    learningGoals: [
      'Integrating Monaco Editor',
      'iframe communication',
      'Code execution sandboxing',
      'Tab-based navigation',
    ],
  },
  {
    id: 'file-explorer',
    title: 'File Explorer UI',
    shortDescription: 'Tree-based file navigation interface',
    fullDescription: 'Create a file explorer interface with folder tree navigation, file icons, and context menus. Great for understanding recursive components.',
    timeEstimate: '4-5 hours',
    difficulty: 'advanced',
    stack: ['React', 'Recursive components', 'Context menu'],
    features: [
      'Folder tree with expand/collapse',
      'File and folder icons',
      'Right-click context menu',
      'Create/rename/delete items',
    ],
    learningGoals: [
      'Recursive component patterns',
      'Tree data structures',
      'Context menus',
      'Keyboard navigation',
    ],
  },
  {
    id: 'data-table',
    title: 'Advanced Data Table',
    shortDescription: 'Sortable, filterable, paginated data table',
    fullDescription: 'Build a feature-rich data table with sorting, filtering, pagination, and row selection. Handle large datasets efficiently.',
    timeEstimate: '4-6 hours',
    difficulty: 'advanced',
    stack: ['React', 'TanStack Table', 'Tailwind'],
    features: [
      'Column sorting (asc/desc)',
      'Global and column filters',
      'Pagination with page size options',
      'Row selection with bulk actions',
    ],
    learningGoals: [
      'Table library integration',
      'Performance with large lists',
      'Complex filtering logic',
      'Bulk operations',
    ],
  },
]

export function getIdeasByLevel(level: string): Idea[] {
  return ideas.filter((idea) => idea.difficulty === level)
}

export function getIdeaById(id: string): Idea | undefined {
  return ideas.find((idea) => idea.id === id)
}

export function shuffleIdeas(ideasList: Idea[]): Idea[] {
  const shuffled = [...ideasList]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
