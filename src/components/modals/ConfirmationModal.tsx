import React from "react";

interface ConfirmationModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
                                                                 isOpen,
                                                                 title,
                                                                 message,
                                                                 onConfirm,
                                                                 onCancel,
                                                             }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-96">
                <div className="p-5 border-b">
                    <h2 className="text-lg font-bold text-gray-700">{title}</h2>
                </div>
                <div className="p-5">
                    <p className="text-gray-600">{message}</p>
                </div>
                <div className="flex justify-end gap-4 p-5 border-t">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 text-sm font-bold text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 text-sm font-bold text-white bg-red-600 rounded hover:bg-red-700"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
