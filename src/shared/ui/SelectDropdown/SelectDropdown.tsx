// src/shared/ui/SelectDropdown/SelectDropdown.tsx
import React from "react";
import styles from "./SelectDropdown.module.css";

interface SelectDropdownProps {
  label: string;
  options: { [key: string]: string };
  value?: string;
  onChange: (value: string) => void;
}

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  label,
  options,
  value = "0",
  onChange,
}) => {
  const isSelectedEmpty = value === "0" || !value;
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <select
        className={`${styles.select} ${isSelectedEmpty ? styles.selectEmpty : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {Object.entries(options).map(([key, displayValue]) => (
          <option key={key} value={key}>
            {displayValue}
          </option>
        ))}
      </select>
    </div>
  );
};
