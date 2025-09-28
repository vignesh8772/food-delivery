import { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";
import { toast } from "react-toastify";

const List = ({url}) => {
  const [List, SetList] = useState([]);

  const fetchlist = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);

    if (response.data.success) {
      SetList(response.data.data);
    } else {
      toast.error(response.data.data);
    }
  };

  const removefood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchlist();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.warning(response.data.error || "Error");
    }
  };
  useEffect(() => {
    fetchlist();
  }, []);

  return (
    <>
      <div className="list add flex-col">
        <p>All Foods List</p>
        <div className="list-table">
          <div className="list-table-format title">
            <b>image</b>
            <b>name</b>
            <b>price</b>
            <b>description</b>
            <b>Category</b>
            <b>date</b>
            <b>Action</b>
          </div>
          {List.map((element) => {
            return  (
              <div key={crypto.randomUUID()} className="list-table-format">
                <img src={`${url}/image/` + element.image} alt="" />
                <p>{element.name}</p>
                <p>${element.price}</p>
                <p>{element.description}</p>
                <p>{element.category}</p>
                <p>
                  {`${new Date().getDate()}/${new Date().getMonth()}-${new Date().getHours()}:${new Date().getMinutes()} ${
                    new Date().getHours() >= 12 ? "PM" : "AM"
                  }`}
                </p>
                <p className="cur" onClick={() => removefood(element._id)}>
                  X
                </p>
              </div>
            ) ;
          })}
        </div>
      </div>
    </>
  );
};

export default List;
