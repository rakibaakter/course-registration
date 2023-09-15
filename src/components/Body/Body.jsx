import { useState } from "react";
import Cards from "../Cards/Cards";
import Cart from "../Cart/Cart";

const Body = () => {
  const [courseList, setCourseList] = useState([]);
  const [remainigCredit, setRemainingCredit] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const selectBtnHandler = (course) => {
    let isFound = courseList.find((value) => {
      return value === course;
    });

    if (!isFound && remainigCredit - course.credit > -1) {
      setCourseList([...courseList, course]);

      setTotalCredit((prev) => prev + course.credit);
      setRemainingCredit((prev) => prev - course.credit);
      setTotalPrice((prev) => prev + course.price);
      setShowToast(false);
    } else {
      setShowToast(true);
    }
  };

  return (
    <div className="px-14 mb-24 flex relative">
      <Cards selectBtnHandler={selectBtnHandler} />
      <Cart
        courseList={courseList}
        remainigCredit={remainigCredit}
        totalCredit={totalCredit}
        totalPrice={totalPrice}
      />

      {showToast && (
        <div className="toast  toast-top toast-center ">
          <div className="alert alert-info">
            <span>This Course Purchase Not Allowed</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
