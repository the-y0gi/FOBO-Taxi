interface CardInputProps {
  label: string;
  value?: string;
  subValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export default function CardInput({
  label,
  value,
  subValue,
  onChange,
  placeholder
}: CardInputProps) {
  return (
    <div className="bg-cardInner rounded-[22px] shadow-cardInner px-6 py-5 w-full border border-borderLight">

      {/* Label */}
      <p className="text-[11px] text-muted uppercase tracking-wide mb-2">
        {label}
      </p>

      {/* Main Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="
          w-full bg-transparent outline-none
          text-[18px] font-semibold text-gray-900
        "
      />

      {/* Sub Text */}
      {subValue && (
        <p className="text-[11px] text-muted mt-1 leading-tight">
          {subValue}
        </p>
      )}
    </div>
  );
}


