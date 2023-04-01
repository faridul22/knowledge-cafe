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
                    <h3>
                        <FontAwesomeIcon icon={faArrowRight} /> Difference between <u>React State</u> Vs <u>props</u>
                    </h3>
                    <p>
                        <strong><FontAwesomeIcon icon={faArrowRight} /> State:</strong> React state is mutable and its value can be changed as per requirements and it's set by parent component. State is local to a component and cannot be used in other components.
                    </p>
                    <p>
                        <strong><FontAwesomeIcon icon={faArrowRight} /> Props:</strong> Props are immutable, that is their content cannot be changed once assigned. It is set by event handlers that is they are completely managed by component itself. props always pass child components to read values from parent components.
                    </p>
                </div>
            </article>
            <article>
                <div>
                    <h3>
                        <FontAwesomeIcon icon={faArrowRight} /> How does <u>useState</u> work under the hood?
                    </h3>
                    <p> <FontAwesomeIcon icon={faArrowRight} /> <strong>What is useState?</strong> useState is a hook in React. Hooks are special functions in React. Depending on the user's interaction with the UI, some things may change. For that We use one of React's  useState hooks.
                    </p>
                    <p> <FontAwesomeIcon icon={faArrowRight} /> <strong>How does work useState?</strong>
                        When we call useState, we are telling react that we want this component to do something.
                    </p>
                    <ol>
                        <li>const [count, setCount] = useState(0);</li>
                        <li>const [element, setElement] = useState("default text");</li>
                    </ol>
                    <p>
                        which the component we call useState for,When our website is reloaded. the component is rendered. When rendered, useState gives us an array containing two values.
                    </p>
                    <ol>
                        <li>The state variable (count) with the value we stored.</li>
                        <li>The state setter function (setCount) which can update the state variable and trigger React to render the component again.</li>
                    </ol>
                    <p><FontAwesomeIcon icon={faArrowRight} /> <strong>When user interact: </strong></p>
                    <ol>
                        <li>Our component renders the first time. Because we passed 0 to useState as the initial value for index, it will return [0, setIndex]. React remembers 0 is the latest state value.</li>
                        <li>When we update the state. When a user clicks the button, it calls setIndex(index + 1). index is 0, so it's setIndex(1). This tells React to remember index is 1 now and triggers another render.</li>
                        <li>Our component's second render. React still sees useState(0), but because React remembers that we set index to 1, it returns [1, setIndex] instead.</li>
                    </ol>

                </div>
            </article>
            <article>
                <h3>
                    <FontAwesomeIcon icon={faArrowRight} /> Purpose of <u>useEffect</u> other than fetching data
                </h3>
                <p><FontAwesomeIcon icon={faArrowRight} />Use effects are mainly used for side effects. That is, use effect is usually used to load data from an external place. But apart from this, there are many other uses of the use effect. <strong>For example below:</strong>
                </p>
                <p>1. <strong>For props change:</strong> suppose we want to trigger a state update due to an updated fetch() call. We are sending the fetched data to a child component, and whenever that data is changed, the child component re-process it.</p>

                <p>2. <strong>State change:</strong> useEffect is a React Hook that can be used for various purposes, including filtering an array based on the input entered by a user. In this scenario, useEffect is used to update the filtered array based on the user's input in real-time. By using the useState Hook to save the input value and useEffect to trigger a filter implementation when the input changes, the component can efficiently update the filtered array without triggering unnecessary re-renders.</p>

                <p>3. <strong>Updating the document title:</strong> You can use the useEffect hook to update the document title using the document.title property. By default, React components do not have access to the document object, but you can access it using the useEffect hook.</p>
            </article>

            <article>
                <h3>
                    <FontAwesomeIcon icon={faArrowRight} /> How Does <u>React</u> work?
                </h3>
                <p><FontAwesomeIcon icon={faArrowRight} /> <strong>What is React:</strong> React
                    is a JavaScript library for building user interfaces. It is Declarative and Component-Based.
                </p>

                <p><FontAwesomeIcon icon={faArrowRight} /> <strong>How React works: </strong>
                    React has Virtual DOM and Real DOM through which React works. The purpose of React's virtual DOM and real DOM process is to efficiently update the UI based on changes in the application state. When a component's state changes, React generates a new virtual representation of the UI and compares it to the previous representation to determine what has changed. It then updates the actual DOM only where necessary, resulting in better performance and faster UI updates.
                </p>

            </article>
        </div>
    );
};

export default QuestionAnswer;