# Instrucciones para Claude en este repositorio

Ver [policies/esp.md](policies/esp.md) (o [policies/eng.md](policies/eng.md)) para las políticas completas y las consideraciones del proyecto (cómo levantar el repo, notas de la base de datos).

- **Política 1**: nunca trabajar ni commitear directo sobre `main`. Para cualquier tarea, crear primero una rama nueva a partir de `main`, trabajar ahí, describir los cambios al abrir el PR y pedir permiso antes de mergear — nunca mergear sin permiso explícito.
- **Política 2**: cada componente va en su propia carpeta (nombrada como el componente), nunca como archivo suelto junto a otros.
- **Política 3**: convenciones de código — `camelCase` para variables/funciones, `PascalCase` para componentes/tipos, `UPPER_SNAKE_CASE` para env vars.
