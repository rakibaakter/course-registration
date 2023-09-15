import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:w-2/3">
            {
                courses.map((course, index) =>
                <Card key={index} course={course}></Card>)
            }
        </div>
    );
};

export default Cards;