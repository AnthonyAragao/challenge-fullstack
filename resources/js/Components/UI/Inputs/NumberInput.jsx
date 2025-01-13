export default function NumberInput({
    id,
    label,
    placeholder,
    value,
    onChange,
    disabled = false,
    error = null,
    className = ''
}) {
    return (
        <div className={`w-full ${className}`}>
            <label
                htmlFor={id}
                className="block text-base font-bold text-gray-800"
            >
                {label}:
            </label>

            <input
                type="number"
                id={id}
                value={value}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
                className={`px-3 py-2 rounded-lg mt-1 focus:outline-none focus:border-gray-300 transition duration-300 w-full text-gray-800 font-semibold ${
                    error ? 'border-red-500' : ''
                }`}
            />

            {error && !disabled && (
                <div className='text-sm text-red-500 font-semibold mt-1'>{error}</div>
            )}
        </div>
    );
}
