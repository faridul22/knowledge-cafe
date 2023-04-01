import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './QuestionAnswer.css'
const QuestionAnswer = () => {
    return (
        <div className='article-container'>
            <h1 className='section-title'><u>Question Answer</u></h1>
            <article>
                <div>
                    <h3><FontAwesomeIcon icon={faArrowRight} /> Difference between <u>React State</u> Vs <u>props</u></h3>
                    <h5></h5>
                    <p>
                        <strong><FontAwesomeIcon icon={faArrowRight} /> State:</strong> React state is mutable and its value can be changed as per requirements and it's set by parent component. State is local to a component and cannot be used in other components.
                    </p>
                    <p>
                        <strong><FontAwesomeIcon icon={faArrowRight} /> Props:</strong> Props are immutable, that is their content cannot be changed once assigned. It is set by event handlers that is they are completely managed by component itself. props always pass child components to read values from parent components.
                    </p>
                </div>
            </article>
        </div>
    );
};

export default QuestionAnswer;