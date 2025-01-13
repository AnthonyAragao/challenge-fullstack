export default function ProductDeleteModal({ onCancel, onConfirm }) {
    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={onCancel}
        >
            <div
                className="group w-[300px] py-10 rounded-2xl border shadow-md flex flex-col items-center bg-gray-100 border-gray-200"
                onClick={(e) => e.stopPropagation()}
            >
                <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="animate-bounce w-12 h-12 flex items-center text-gray-600 fill-red-500 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        fillRule="evenodd"
                    ></path>
                </svg>
                <h2 className="text-xl font-bold py-4 text-gray-700">Are you sure?</h2>
                <p className="text-sm font-bold text-center text-gray-500 px-2">
                    Do you really want to delete this product? This process cannot be undone.
                </p>
                <div className="mt-6 flex gap-2">
                    <button
                        type="button"
                        className="rounded-full shadow-lg px-5 py-2 text-sm font-medium tracking-wider text-gray-300 border transition ease-in duration-300 bg-gray-600 border-gray-600 hover:bg-transparent hover:text-black"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="bg-red-500 hover:bg-transparent px-5 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border border-red-500 hover:border-red-500 text-white hover:text-red-500 rounded-full transition ease-in duration-300"
                        onClick={onConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
