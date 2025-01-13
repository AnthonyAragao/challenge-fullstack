export default function CheckboxInput({
    id,
    label,
    checked,
    onChange,
    disabled = false,
    error = null,
    className = ''
}) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                className="w-5 h-5 rounded focus:ring focus:ring-blue-300 focus:outline-none transition duration-300 cursor-pointer"
            />
            <label
                htmlFor={id}
                className={`text-base font-bold text-gray-800 ${disabled ? 'text-gray-500' : ''}`}
            >
                {label}
            </label>

            {error && !disabled && (
                <div className="text-red-500 text-sm mt-1">{error}</div>
            )}
        </div>
    );
}
