import React from "react";

const Items = (props) => {
  const { items, del, increaseQuantity, decreaseQuantity } = props;
  let length = items.length;
  const ListItem = length ? (
    items.map((item) => {
      return (
        <div key={item.id} className="item">
          <p>{item.product}</p>
          <p>{item.price}</p>
          <p className="delete" onClick={() => del(item.id)}>
            &times;
          </p>
          <p>{item.quantity}</p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </p>
        </div>
      );
    })
  ) : (
    <div className="text">There are no items, Try to add some.</div>
  );
  return (
    <div>
      <div className="header item">
        <p>Product</p>
        <p>Price</p>
        <p>Remove</p>
        <p style={{ width: "300%" }}>quantity</p>
      </div>
      {ListItem}
    </div>
  );
};

export default Items;
