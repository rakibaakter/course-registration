import React from "react";

const Cart = ({ courseList, remainigCredit, totalCredit, totalPrice }) => {
  return (
    <div className="w-1/5 text-center fixed right-0">
      <div className="bg-base-100 shadow-xl space-y-6">
        <h3 className="text-xl font-bold text-primary">
          Credit Hour Remaining {remainigCredit} hr
        </h3>
        <hr className="mx-6" />
        <div className="text-left px-6 space-y-4 pb-6">
          <h3 className="text-xl font-bold">Course Name</h3>
          <ul>
            {courseList.map((couseName, index) => (
              <li className="font-medium" key={index}>
                {index + 1} {couseName.title}
              </li>
            ))}
          </ul>
          <hr className="mx-6" />
          <span className="font-bold">Total Credit Hour : {totalCredit} </span>
          <hr className="mx-6" />
          <span className="font-semibold">Total Price : {totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
