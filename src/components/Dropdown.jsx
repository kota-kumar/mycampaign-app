import React from "react";

const Dropdown = ({ label, options, value, onChange, disabled }) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium text-gray-700">{label}</label>
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full p-2 border rounded-md"
    >
      <option value="">-- Select {label} --</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
