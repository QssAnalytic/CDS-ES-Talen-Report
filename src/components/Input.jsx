import React from "react";

const Input = ({
  name,
  type = "text",
  className,
  value,
  setValue,
  placeholder,
  checked,
}) => {
  const handleChange = (e) => {
    type === "number"
      ? Number(e.target.value) >= 100
        ? setValue(100)
        : Number(e.target.value) <= 0
        ? setValue(0)
        : setValue(Number(e.target.value))
      : setValue(e.target.value);
  };
  return (
    <div className="flex flex-col gap-1">
      <label className="capitalize text-sm font-medium">{name}</label>
      <input
        name={name}
        type={type}
        className={`placeholder:capitalize border border-solid border-gray-300 rounded-lg shadow-sm max-w-[180px] focus:outline-none px-2 py-1 ${
          className || ""
        } `}
        onChange={handleChange}
        value={value || ""}
        placeholder={placeholder}
        checked={checked || false}
      />
    </div>
  );
};

export default Input;
