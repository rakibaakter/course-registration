import React from "react";

const Cart = ({ courseList, remainigCredit, totalCredit, totalPrice }) => {
  return (
    <div className="w-full m-0 lg:w-1/5 text-center fixed right-0 top-0 lg:h-screen lg:flex lg:items-center">
      <div className="bg-base-100 shadow-xl space-y-6 p-2 px-4">
        <h3 className="lg:text-xl font-bold text-primary">
          Credit Hour Remaining {remainigCredit} hr
        </h3>
        <hr className="mx-6" />
        <div className="lg:p-10 px-4">
          <div className="text-left space-y-4 pb-6">
            <h3 className="lg:text-xl font-bold">Course Name</h3>
            <ul className="h-6 lg:h-12 overflow-auto">
              {courseList.map((couseName, index) => (
                <li className="font-medium" key={index}>
                  {index + 1} {couseName.title}
                </li>
              ))}
            </ul>
            <hr className="mx-6" />
            <span className="font-bold">Total Credit Hour : {totalCredit}</span>
            <hr className="mx-6" />
            <span className="font-semibold">Total Price : {totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
