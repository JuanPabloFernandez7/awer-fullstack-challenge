import React from 'react';

interface HeaderProps {
    onNewTask: () => void;
}

export default function Header({ onNewTask }: HeaderProps) {
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="card-title display-5 fw-bold text-primary mb-2">📋 Gestor de Tareas</h1>
                    <p className="card-text text-muted mb-0">Organiza tus actividades diarias</p>
                </div>
                <button className="btn btn-primary btn-lg" onClick={onNewTask}>
                    ➕ Nueva Tarea
                </button>
            </div>
        </div>
    );
}
