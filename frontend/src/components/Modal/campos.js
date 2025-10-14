import React from "react";

// 🧱 Campo de texto comum
export function CampoTexto({ label, name, value, onChange, type = "text" }) {
  return (
    <div className="mb-3">
      <label className="font-bold text-lg block mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md p-2 text-lg"
      />
    </div>
  );
}

// 🔽 Campo de seleção (select)
export function CampoSelect({ label, name, value, onChange, options = [] }) {
  return (
    <div className="mb-3">
      <label className="font-bold text-lg block mb-1">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md p-2 text-lg"
      >
        <option value="">Selecione...</option>
        {options.map((opt, i) => (
          <option key={i} value={opt.id || opt.value || opt}>
            {opt.nome || opt.label || opt}
          </option>
        ))}
      </select>
    </div>
  );
}

// 🗒️ Campo de texto grande (textarea)
export function CampoArea({ label, name, value, onChange, rows = 3 }) {
  return (
    <div className="mb-3">
      <label className="font-bold text-lg block mb-1">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full border border-gray-300 rounded-md p-2 text-lg resize-none"
      />
    </div>
  );
}
