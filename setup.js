const { execSync } = require('child_process');
const fs = require('fs');

// Función para ejecutar comandos
function runCommand(command) {
    try {
        execSync(command, { stdio: 'inherit' });
    } catch (error) {
        console.error(`Error ejecutando ${command}:`, error);
        process.exit(1);
    }
}

// Función principal de instalación
async function setup() {
    console.log('🚀 Iniciando setup de Saga Store...');

    // 1. Instalar dependencias base
    console.log('\n📦 Instalando dependencias base...');
    runCommand('npm install react react-dom @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge tailwindcss-animate');

    // 2. Instalar dependencias de desarrollo
    console.log('\n🛠️  Instalando dependencias de desarrollo...');
    runCommand('npm install -D @types/node @types/react @types/react-dom @vitejs/plugin-react autoprefixer eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh postcss tailwindcss vite');

    // 3. Inicializar Tailwind
    console.log('\n🎨 Configurando Tailwind CSS...');
    runCommand('npx tailwindcss init -p');

    // 4. Instalar componentes shadcn/ui
    console.log('\n🧩 Instalando componentes UI...');
    runCommand('npx shadcn-ui@latest init');
    runCommand('npx shadcn-ui@latest add button card badge');

    console.log('\n✅ Setup completado!');
    console.log('\nPara iniciar el proyecto:');
    console.log('1. npm run dev');
    console.log('2. Abre http://localhost:5173 en tu navegador');
}

// Ejecutar setup
setup().catch(console.error);
