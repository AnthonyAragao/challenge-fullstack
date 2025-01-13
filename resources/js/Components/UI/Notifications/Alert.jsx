import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../../css/alert.css';

export default function Alert({
    message,
    duration = 1500,
    customClass = ''
}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message) {
            setIsVisible(true);
            const hideTimer = setTimeout(() => setIsVisible(false), duration);
            return () => clearTimeout(hideTimer);
        }
    }, [message, duration]);

    return (
        <CSSTransition
            in={isVisible}
            timeout={300}
            classNames="alert"
            unmountOnExit
        >
            <div
                className={`fixed bottom-10 right-8 bg-green-500 text-white px-6 py-2 rounded-md shadow-lg flex items-center gap-4 z-10 ${customClass}`}
            >
                <span className="text-sm font-semibold">{message}</span>
                <button
                    type="button"
                    onClick={() => setIsVisible(false)}
                    className="text-white hover:text-gray-300"
                >
                    <i className="fas fa-times"></i>
                </button>
            </div>
        </CSSTransition>
    );
}
