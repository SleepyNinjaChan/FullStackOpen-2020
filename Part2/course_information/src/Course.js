import React from 'react'

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div >
    )
}

const Header = ({ course }) => {
    return (
        <h2> {course.name}</h2>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map((part, id) =>
                <Part key={id} part={part} />
            )}
        </div>
    )
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Total = ({ course }) => {
    const sum = course.parts.reduce(
        (prevValue, currentValue) => prevValue + currentValue.exercises,
        0);
    return (
        <p>
            <b>total of {sum} exercises</b>
        </p>
    )
}

export default Course