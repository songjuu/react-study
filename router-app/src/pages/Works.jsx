import React from "react";
import { Link } from "react-router-dom";
import { data } from "../shared/data";

function Works() {
  return (
    <>
      <div>
        <h3>할일 목록</h3>
        {data.map((item) => {
          return (
            <>
              <div key={item.id}>
                {item.id}
                <Link to={`/works/${item.id}`}>&nbsp;{item.todo}</Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Works;
