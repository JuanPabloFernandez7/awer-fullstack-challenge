import React from 'react';

interface Task {
    id: number;
    title: string;
    description: string;
}

interface TaskAccordionProps {
    tasks: Task[];
    expandedTask: number | null;
    toggleAccordion: (taskId: number) => void;
    indexOffset: number;
}

export default function TaskAccordion({
                                          tasks,
                                          expandedTask,
                                          toggleAccordion,
                                          indexOffset,
                                      }: TaskAccordionProps) {
    if (tasks.length === 0) return <p className="text-center py-5 text-muted">📭 No hay tareas aún</p>;

    return (
        <div className="accordion mb-4">
            {tasks.map((task, index) => (
                <div className="accordion-item" key={task.id}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button ${expandedTask === task.id ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleAccordion(task.id)}
                            aria-expanded={expandedTask === task.id}
                        >
                            <span className="badge bg-primary rounded-pill me-3">{indexOffset + index + 1}</span>
                            <strong>{task.title}</strong>
                        </button>
                    </h2>
                    <div className={`accordion-body ${expandedTask === task.id ? '' : 'd-none'}`}>
                        <p className="mb-0">{task.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
