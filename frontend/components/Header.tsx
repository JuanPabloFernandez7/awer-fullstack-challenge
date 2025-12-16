import React from 'react';
import { ClipboardList, Plus } from 'lucide-react';

interface HeaderProps {
    onNewTask: () => void;
}

export default function Header({ onNewTask }: HeaderProps) {
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                    <ClipboardList size={40} className="text-primary" />
                    <div>
                        <h1 className="card-title display-5 fw-bold text-primary mb-2">Gestor de Tareas</h1>
                        <p className="card-text text-muted mb-0">Organiza tus actividades diarias</p>
                    </div>
                </div>
                <button className="btn btn-primary btn-lg d-flex align-items-center gap-2" onClick={onNewTask}>
                    <Plus size={20} />
                    Nueva Tarea
                </button>
            </div>
        </div>
    );
}
