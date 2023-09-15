import { LuDollarSign } from "react-icons/lu"
import { BsBook } from "react-icons/bs";
const Card = ({course, selectBtnHandler}) => {

      const {thumbnail, title, description, price, credit } = course;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={thumbnail} alt=" " className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-left space-y-2">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="flex justify-between gap-6" >
                    <div className="flex items-center justify-between">
                        <LuDollarSign/> <span> Price : {price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <BsBook/> <span> Credit : {credit} hr</span>
                    </div>
                    
                    
                </div>
                <div className="card-actions w-full">
                <button onClick={()=>selectBtnHandler(course)} className="btn btn-primary w-full">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Card;