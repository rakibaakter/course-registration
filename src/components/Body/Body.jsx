import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";

const Body = () => {
    return (
        <div className="px-14 mb-24 flex">
            <Cards></Cards>
            <Cart></Cart>
        </div>
    );
};

export default Body;