#!/bin/bash
echo "🚀 Iniciando setup..."
npm install react react-dom @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge tailwindcss-animate
npm install -D @types/node @types/react @types/react-dom @vitejs/plugin-react autoprefixer eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh postcss tailwindcss vite
npx tailwindcss init -p
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge
echo "✅ Setup completado!"