# Instrucciones de Instalación

Para instalar todas las dependencias necesarias, sigue estos pasos:

1. Abre una terminal en la raíz del proyecto
2. Ejecuta los siguientes comandos:

```bash
# Instalar dependencias base
npm install react react-dom @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge tailwindcss-animate

# Instalar dependencias de desarrollo
npm install -D @types/node @types/react @types/react-dom @vitejs/plugin-react autoprefixer eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh postcss tailwindcss vite

# Configurar Tailwind CSS
npx tailwindcss init -p

# Instalar componentes UI
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge
```

3. Una vez completada la instalación, puedes iniciar el proyecto con:
```bash
npm run dev
```

4. Abre http://localhost:5173 en tu navegador

## Scripts de Instalación Automática

También puedes usar los siguientes comandos para una instalación automática:

### Windows
```batch
@echo off
echo 🚀 Iniciando setup...
npm install react react-dom @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge tailwindcss-animate
npm install -D @types/node @types/react @types/react-dom @vitejs/plugin-react autoprefixer eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh postcss tailwindcss vite
npx tailwindcss init -p
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge
```

### Linux/Mac
```bash
#!/bin/bash
echo "🚀 Iniciando setup..."
npm install react react-dom @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge tailwindcss-animate
npm install -D @types/node @types/react @types/react-dom @vitejs/plugin-react autoprefixer eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh postcss tailwindcss vite
npx tailwindcss init -p
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge
```

Copia y pega estos comandos en un archivo con la extensión correspondiente (.bat para Windows o .sh para Linux/Mac) y ejecútalo.