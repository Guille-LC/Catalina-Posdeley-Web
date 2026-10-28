# Políticas del repositorio

Este documento reúne las políticas de trabajo para este repositorio, numeradas en el orden en que se definen.

Versión en inglés: [eng.md](eng.md)

---

## Consideraciones

### Cómo levantar el repo

1. Instalar dependencias: `npm install`.
2. Crear un archivo `.env` en la raíz con las variables necesarias:
   - `MONGODB_URI`: connection string de MongoDB Atlas (incluye usuario, password y nombre de base).
   - `NEXT_PUBLIC_SITE_URL`: URL del sitio (en desarrollo, `http://localhost:4000`).
3. Levantar el servidor de desarrollo: `npm run dev` (corre en el puerto 4000, no 3000, para evitar conflictos con otros proyectos).
4. Para verificar un build de producción: `npm run build` y después `npm run start`.

### Base de datos (MongoDB)

- Se usa MongoDB Atlas, cluster `catalina-posdeley-libro.e1a40oj.mongodb.net`, base `catalina-posdeley-librosDB`, colección `books`.
- El cluster es de plan gratuito (M0) y **se pausa por inactividad**. Si en el deploy o en local aparece un error de conexión (`querySrv ENOTFOUND`, timeouts), lo primero es revisar en el dashboard de Atlas si el cluster está pausado y reanudarlo.
- En Vercel hay instalada la integración "MongoDB Atlas" (Marketplace), que inyecta su propia variable `MONGODB_URI`. Esa URI generada por la integración **no incluye el nombre de la base** en la ruta — por eso `connectToDB()` en [src/lib/mongoose.ts](../src/lib/mongoose.ts) pasa `dbName: "catalina-posdeley-librosDB"` explícito como opción de conexión. No quitar esa opción, aunque la URI de `.env` sí incluya el nombre de la base.
- El modelo de Mongoose se registra con el guard `mongoose.models[nombre] || mongoose.model(nombre, schema)` para evitar `OverwriteModelError` en hot-reload (dev) y en funciones serverless "calientes" (producción). No sacar ese guard.
- Las páginas y la API nunca hacen `fetch` a la propia API del sitio (`/api/obras`) desde un Server Component — todas usan [src/lib/getBooks.ts](../src/lib/getBooks.ts), que llama directo a Mongo. Hacer fetch a la propia API desde el servidor rompe en Vercel (URL hardcodeada o inválida) y además pisa un bug conocido de Next.js/undici con `cache: "no-store"`.

### Estilos (Sass)

- El import de Tailwind (`@import "tailwindcss";` + el bloque `@theme inline`) vive aparte, en [src/styles/app/tailwind.css](../src/styles/app/tailwind.css) (CSS plano). Si se mueve ese `@import` a un archivo `.scss`, Sass lo trata como su propio `@import` (deprecado) y tira un warning en cada build/request — por eso ese archivo puntual se deja en `.css`, no en `.scss`.
- `globals.scss` solo tiene las variables (`:root`), el modo oscuro y la regla de `body`. Ambos archivos se importan juntos desde `src/app/layout.tsx`.

---

## Política 1 — Ramas y merge

A partir de ahora, ningún trabajo se hace directamente sobre `main`. Para cualquier cambio (feature, fix, experimento, etc.) hay que:

1. Crear una rama nueva a partir de `main`, con un nombre descriptivo del trabajo (ej: `fix-mongo-connection`, `feature-newsletter`).
2. Hacer el trabajo y los commits en esa rama.
3. Al abrir el PR describir detalladamente los cambios hechos en la rama y pedir permiso para el merge. Nunca mergear sin permiso.
4. Una vez terminado y probado, mergear la rama a `main`.

Nunca se commitea ni se pushea directo a `main`.

## Política 2 — Organización de carpetas

Hay que respetar el orden de carpetas del proyecto. Cada componente debe tener su propia carpeta (nombrada como el componente), en vez de quedar como un archivo suelto junto a otros componentes.

## Política 3 — Convenciones de código

- Variables y funciones: `camelCase` (ej: `getBooks`, `isValid`).
- Componentes de React, tipos e interfaces: `PascalCase` (ej: `Bookcard`, `Book`).
- Archivos de un componente: mismo nombre que el componente, en su propia carpeta (ver Política 2).
- Variables de entorno y constantes de configuración: `UPPER_SNAKE_CASE` (ej: `MONGODB_URI`).
- Clases CSS (CSS Modules): `camelCase` (ej: `botoneraGeneros`).

## Política 4 — Organización de estilos

Todos los estilos se centralizan en `src/styles/`, reflejando la misma estructura de carpetas que `src/components/` y `src/app/` (un componente en `src/components/Header/` tiene su estilo en `src/styles/components/Header/`, una página en `src/app/autora/` tiene el suyo en `src/styles/app/autora/`, etc.). Ningún componente o página tiene un archivo de estilos al lado de su código.

Los estilos se escriben en Sass (`.module.scss` para módulos con clases locales, `.scss`/`.css` para lo global). Si dos componentes comparten reglas, se factorizan en un partial (`_nombre.scss`) con mixins en vez de duplicar las reglas en cada archivo.
