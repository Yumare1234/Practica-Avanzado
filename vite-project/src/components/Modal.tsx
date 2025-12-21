import React from "react"
import { useState } from "react"

interface ModalProps {
  isOpen: Boolean;
  onClose: () => void;
  title: string;
}

const Modal = ({ isOpen, onClose, title}: ModalProps) => {
  if (!isOpen) return null;
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm p-4"> 
    <div className="bg-gray-500 rounded-xl shadow-2xl w-full max-w-md overflow-hidden border-2 border-purple-900">
      <div className="flex justify-between items-center p-4 bg-purple-900 text-white"></div>
          <h3 className="text-xl font-bold">{title}</h3>
          <button 
            onClick={onClose}
            className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-800">
            Cerrar
            </button>
      </div>
    </div>

  );
};

export { Modal };