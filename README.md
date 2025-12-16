# Awer Todo App – Desafío Full Stack

Aplicación Full Stack de Lista de Tareas (To‑Do List) desarrollada como parte del proceso técnico de Awer Reviews.

El proyecto implementa un frontend en React (Next.js) y un backend en Spring Boot, conectados a una base de datos MySQL.

---

## Objetivo del Proyecto

Construir una aplicación simple pero bien estructurada que permita:

* Visualizar una lista de tareas almacenadas en una base de datos.
* Agregar nuevas tareas mediante un formulario.
* Consumir una API REST desde el frontend.
* Mantener una arquitectura clara, escalable y fácil de mantener.

---

##  Arquitectura General

```
/awer-fullstack-challenge
│
├── backend/    → API REST en Spring Boot + MySQL
└── frontend/   → Aplicación React (Next.js)
```

* **Frontend**: Consume la API REST usando `fetch`.
* **Backend**: Expone endpoints REST y persiste datos con JPA.
* **Base de Datos**: MySQL, con script de creación y datos iniciales.

---

## Backend – Spring Boot

### Tecnologías

* Java 17+
* Spring Boot
* Spring Web
* Spring Data JPA
* MySQL
* Maven

### Estructura 

```
backend/src/main/java/com/awer/backend/
├── BackendApplication.java
├── controller/
│   └── TaskController.java
├── dto/
│   └── TaskRequestDto.java
├── exception/
│   └── ValidationExceptionHandler.java
├── model/
│   └── Task.java
├── repository/
│   └── TaskRepository.java
└── service/
    ├── TaskService.java
    └── TaskServiceImpl.java
```

### Entidad Task

```java
Task
- id (Long, autogenerado)
- title (String, no nulo)    
- description (String, no nulo)
```

## Nota sobre la Entidad Task

Se agregó la tupla `title` a la entidad `Task` para mejorar la experiencia de usuario (UX), permitiendo que cada tarea tenga un título descriptivo además de la descripción.

---

### Endpoints REST

| Método | Endpoint | Descripción               |
| ------ | -------- | ------------------------- |
| GET    | /tasks   | Devuelve todas las tareas |
| POST   | /tasks   | Crea una nueva tarea      |

### Base de Datos

**Tabla: `tasks`**

El repositorio incluye scripts en `backend/src/main/resources/` para la gestión de la base de datos:

- `schema.sql`: crea la tabla `tasks` con las columnas `id`, `title` y `description`.
- `data.sql`: carga datos iniciales de ejemplo en la tabla.

###  Ejecución del Backend

1. Crear la base de datos en tu instancia de MySQL.
2. Crear el archivo `application.properties` en `backend/src/main/resources/` siguiendo el ejemplo de `application.properties.example` y configura tus credenciales y parámetros de conexión.
3. Ejecutar el backend:

```bash
cd backend
mvn spring-boot:run
```

La API queda disponible en:

```
http://localhost:8080
```

---

## Frontend – React 

### Tecnologías

* React
* Next.js (App Router)
* TypeScript
* Bootstrap 5
* Fetch API
* Lucide Icons

### Estructura

```
frontend/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── api/
│   └── tasks.js
├── components/
│   ├── Header.tsx
│   ├── ErrorAlert.tsx
│   ├── TaskAccordion.tsx
│   ├── TaskModal.tsx
│   └── Pagination.tsx
...
```

### Funcionalidades

* Obtención de tareas al cargar la página (`useEffect`).
* Estado local gestionado con `useState`.
* Alta de nuevas tareas.

### Comunicación con la API

Archivo: `api/tasks.js`

* `fetchTasks()` → GET `/tasks`
* `createTask(task)` → POST `/tasks`

### Ejecución del Frontend

```bash
npm install
npm run dev
```

Queda disponible en:

```
http://localhost:3000
```

---

