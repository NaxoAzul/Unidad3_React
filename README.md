# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


SportClub SPA

Descripción

SportClub SPA es una aplicación web desarrollada con React que permite la gestión de usuarios mediante autenticación, autorización por roles y un módulo administrativo CRUD.

El sistema diferencia tres tipos de usuarios:

Usuario
Coach
Administrador

Cada rol posee su propio dashboard y acceso a funcionalidades específicas.

Tecnologías Utilizadas
Frontend
React
Vite
React Router DOM
Bootstrap
React-Bootstrap
SweetAlert2
Backend
Node.js
Express
JWT (JSON Web Token)
Base de datos del proyecto SportClub
Funcionalidades Implementadas
Autenticación
Inicio de sesión
Registro de usuarios
Persistencia de sesión
Cierre de sesión
Seguridad
Rutas protegidas
Validación por roles
Página de acceso no autorizado
Dashboards
Dashboard Usuario
Dashboard Coach
Dashboard Administrador
Perfil
Visualización de información de la cuenta
Nombre
Correo
Rol
Administración

CRUD de Usuarios:

Listar usuarios
Crear usuarios
Editar usuarios
Eliminar usuarios
Instalación del Frontend
Clonar el repositorio.
Ingresar a la carpeta del proyecto:
cd sportclub-react
Instalar dependencias:
npm install
Ejecutar la aplicación:
npm run dev
Abrir en el navegador:
http://localhost:5173
Instalación del Backend
Ingresar a la carpeta del backend.
cd sportclub-backend
Instalar dependencias:
npm install
Ejecutar el servidor:
npm run dev
Verificar que el backend esté disponible en:
http://localhost:3000
Estructura del Proyecto
src/
│
├── components/
├── layouts/
├── pages/
├── routes/
├── services/
│
├── App.jsx
└── main.jsx