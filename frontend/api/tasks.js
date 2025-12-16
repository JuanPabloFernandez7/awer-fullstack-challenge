const API_BASE_URL = 'http://localhost:8080';

export const fetchTasks = async () => {
    const res = await fetch(`${API_BASE_URL}/tasks`);
    if (!res.ok) throw new Error('Error al obtener las tareas');
    return await res.json();
};

export const createTask = async (task) => {
    const res = await fetch(`${API_BASE_URL}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });

    if (res.status === 400) {
        const validationErrors = await res.json();
        throw { validationErrors };
    }

    if (!res.ok) throw new Error('Error al crear la tarea');
    return await res.json();
};
