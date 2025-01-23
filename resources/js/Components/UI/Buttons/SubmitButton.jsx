export default function SubmitButton({ label, disabled = false, className = ''}) {
    return (
        <button
            type="submit"
            disabled={disabled}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 text-sm font-semibold mt-4 ${className}`}
        >
            {label}
        </button>
    );
}
