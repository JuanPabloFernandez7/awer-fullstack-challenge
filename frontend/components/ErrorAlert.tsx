import React from 'react';
import { AlertCircle} from "lucide-react";

interface ErrorAlertProps {
    error: string | null;
    onClose: () => void;
}

export default function ErrorAlert({ error, onClose }: ErrorAlertProps) {
    if (!error) return null;
    return (
        <div className="alert alert-danger alert-dismissible fade show d-flex align-items-center gap-2" role="alert">
            <AlertCircle size={20} />
            <div className="flex-grow-1">
                <strong>Error:</strong> {error}
            </div>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
        </div>
    );
}
