import React, { useState } from "react";
import "../css/progress.css";

const ProgressStep = () => {
    const [currentActive, setCurrentActive] = useState(0);
    const circles = [1, 2, 3, 4];

    const changeClasses = () => {
        const updatedCircles = circles.map((circle, index) => {
            if (index === currentActive) {
                return <div className="circle active" key={index}>{circle}</div>;
            } else {
                return <div className="circle" key={index}>{circle}</div>;
            }
        });

        return updatedCircles;
    };

    const nextButtonHandler = () => {
        setCurrentActive(prevActive => (prevActive + 1) % circles.length);
    };

    const prevButtonHandler = () => {
        setCurrentActive(prevActive => (prevActive - 1 + circles.length) % circles.length);
    };

    return (
        <div className="p-container">
            <div className="progress-container">
                <div className="progress" id="progress"></div>
                {changeClasses()}
            </div>

            <button
                onClick={prevButtonHandler}
                className="btn"
                id="prev"
                disabled={currentActive === 0}
            >
                Prev
            </button>
            <button
                onClick={nextButtonHandler}
                className="btn"
                id="next"
                disabled={currentActive === circles.length - 1}
            >
                Next
            </button>
        </div>
    );
};

export default ProgressStep;

