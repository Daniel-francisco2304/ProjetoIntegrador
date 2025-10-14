import React from "react";
import FuncionarioForm from "./FuncionarioForm";

export function MyModal({ isOpen, setIsOpen, func }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-10"
        onClick={() => setIsOpen(false)}
      />
      <div
        className="fixed top-1/2 left-1/2 bg-white rounded-xl p-6 w-3/5 min-w-[500px] z-20
                   transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
      >
        <FuncionarioForm func={func} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
}
