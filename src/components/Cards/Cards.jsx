import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = ({selectBtnHandler}) => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:w-4/5">
            {
                courses.map((course, index) =>
                <Card key={index} 
                course={course} 
                selectBtnHandler={selectBtnHandler}>
                </Card>)
            }
        </div>
    );
};

export default Cards;