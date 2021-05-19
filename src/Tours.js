import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, handleDelete }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} handleDelete={handleDelete}></Tour>
        ))}
      </div>
    </section>
  );
};

export default Tours;
