import React from 'react';
import { Plus, Save } from 'lucide-react';

interface TaskModalProps {
    show: boolean;
    title: string;
    description: string;
    fieldErrors: { title?: string; description?: string };
    submitting: boolean;
    onClose: () => void;
    onChangeTitle: (value: string) => void;
    onChangeDescription: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export default function TaskModal({
                                      show,
                                      title,
                                      description,
                                      fieldErrors,
                                      submitting,
                                      onClose,
                                      onChangeTitle,
                                      onChangeDescription,
                                      onSubmit,
                                  }: TaskModalProps) {
    if (!show) return null;

    return (
        <>
            <div className="modal-backdrop fade show"></div>
            <div
                className="modal d-block"
                tabIndex={-1}
                onClick={onClose}
                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title d-flex align-items-center gap-2">
                                <Plus size={20} />
                                Nueva Tarea
                            </h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                onClick={onClose}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label fw-semibold">
                                    Título <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${fieldErrors.title ? 'is-invalid' : ''}`}
                                    value={title}
                                    onChange={(e) => onChangeTitle(e.target.value)}
                                    placeholder="Ej: Entrar a Awer Reviews"
                                    disabled={submitting}
                                />
                                {fieldErrors.title && <div className="invalid-feedback">{fieldErrors.title}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">
                                    Descripción <span className="text-danger">*</span>
                                </label>
                                <textarea
                                    className={`form-control ${fieldErrors.description ? 'is-invalid' : ''}`}
                                    rows={4}
                                    value={description}
                                    onChange={(e) => onChangeDescription(e.target.value)}
                                    placeholder="Para entrar a Awer Reviews primero debo..."
                                    disabled={submitting}
                                ></textarea>
                                {fieldErrors.description && <div className="invalid-feedback">{fieldErrors.description}</div>}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onClose}
                                disabled={submitting}
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary d-flex align-items-center gap-2"
                                onClick={onSubmit}
                                disabled={submitting}
                            >
                                {submitting ? (
                                    <>
                    <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                                        Guardando...
                                    </>
                                ) : (
                                    <>
                                        <Save size={18} />
                                        Guardar Tarea
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
