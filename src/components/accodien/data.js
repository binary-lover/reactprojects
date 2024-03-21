// array of objects with id question and a long answers
const data = [
    {
        id: 1,
        question: 'What is React?',
        answer: `React is a
        JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.`
    },
    {
        id: 2,
        question: 'What is JSX?',
        answer: `JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML. JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.`
    },
    {
        id: 3,
        question: 'What is the difference between Element and Component?',
        answer: `An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.`
    },
    {
        id: 4,
        question: 'Why do we use React?',
        answer: `React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.`
    },
    {
        id: 5,
        question: 'What is the difference between state and props?',
        answer: `Both props and state are plain JavaScript objects. While both hold information that influences the output of render, they are different in their functionality with respect to component.`
    },
];

export default data;