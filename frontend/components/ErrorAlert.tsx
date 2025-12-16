import React from 'react';

interface ErrorAlertProps {
    error: string | null;
    onClose: () => void;
}

export default function ErrorAlert({ error, onClose }: ErrorAlertProps) {
    if (!error) return null;
    return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> {error}
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
        </div>
    );
}
