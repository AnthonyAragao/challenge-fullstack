import { Link } from "@inertiajs/react";

export default function ActionButton({ href, onClick, text, iconClass, color }) {
    const ButtonWrapper = href ? Link : "button";
    return (
        <ButtonWrapper
            href={href}
            onClick={onClick}
            className={`relative rounded-md w-28 h-8 cursor-pointer flex items-center border overflow-hidden group border-${color}-600 bg-${color}-500`}
        >
            <span className="absolute left-0 px-4 text-white font-semibold transition-all duration-300 group-hover:text-transparent text-sm">
                {text}
            </span>
            <span
                className={`absolute right-0 w-10 h-full flex items-center justify-center bg-${color}-700 transition-all duration-300 transform group-hover:w-full`}
            >
                <i className={`${iconClass} text-white`}></i>
            </span>
        </ButtonWrapper>
    );
}
