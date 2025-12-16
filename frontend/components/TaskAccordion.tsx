import React from 'react';
import {Inbox} from 'lucide-react'

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
    if (tasks.length === 0) {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center py-5" style={{ minHeight: '200px' }}>
                <Inbox size={64} className="text-muted mb-3" />
                <p className="text-muted mb-0">No hay tareas aún</p>
            </div>
        );
    }


    return (
        <div className="accordion mb-4" id="taskAccordion">
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


