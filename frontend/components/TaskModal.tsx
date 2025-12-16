import React from 'react';

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
    if (!show) return null; // <--- No renderizar nada si show es false

    return (
        <>
            {/* Backdrop */}
            <div className="modal-backdrop fade show"></div>

            {/* Modal */}
            <div
                className="modal d-block"
                tabIndex={-1}
                onClick={onClose} // Clic afuera cierra
                style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} // fondo semitransparente
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    onClick={(e) => e.stopPropagation()} // evita que clic dentro cierre
                >
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">✨ Nueva Tarea</h5>
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                onClick={onClose} // Cruz cierra
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
                                    placeholder="Ej: Completar informe mensual"
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
                                    placeholder="Describe los detalles de tu tarea..."
                                    disabled={submitting}
                                ></textarea>
                                {fieldErrors.description && <div className="invalid-feedback">{fieldErrors.description}</div>}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={onClose} // Cancel cierra
                                disabled={submitting}
                            >
                                Cancelar
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={onSubmit}
                                disabled={submitting}
                            >
                                {submitting ? (
                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                        Guardando...
                                    </>
                                ) : (
                                    '💾 Guardar Tarea'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
