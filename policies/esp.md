# Políticas del repositorio

Este documento reúne las políticas de trabajo para este repositorio, numeradas en el orden en que se definen.

Versión en inglés: [eng.md](eng.md)

---

## Política 1 — Ramas y merge

A partir de ahora, ningún trabajo se hace directamente sobre `main`. Para cualquier cambio (feature, fix, experimento, etc.) hay que:

1. Crear una rama nueva a partir de `main`, con un nombre descriptivo del trabajo (ej: `fix-mongo-connection`, `feature-newsletter`).
2. Hacer el trabajo y los commits en esa rama.
3. Al abrir el PR describir detalladamente los cambios hechos en la rama y pedir permiso para el merge. Nunca mergear sin permiso.
4. Una vez terminado y probado, mergear la rama a `main`.

Nunca se commitea ni se pushea directo a `main`.
