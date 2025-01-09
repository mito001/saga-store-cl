@echo off
echo 🚀 Iniciando setup de Saga Store...

echo 📦 Instalando dependencias base...
call npm install react react-dom @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge tailwindcss-animate

echo 🛠️ Instalando dependencias de desarrollo...
call npm install -D @types/node @types/react @types/react-dom @vitejs/plugin-react autoprefixer eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh postcss tailwindcss vite

echo 🎨 Configurando Tailwind CSS...
call npx tailwindcss init -p

echo 🧩 Instalando componentes UI...
call npx shadcn-ui@latest init
call npx shadcn-ui@latest add button card badge

echo ✅ Setup completado!
echo.
echo Para iniciar el proyecto:
echo 1. npm run dev
echo 2. Abre http://localhost:5173 en tu navegador
pause