import React, {useState} from 'react'
import {useCart, useDispatchCart} from './ContexReduser'
export default function Cards(props) {
  let dispatch = useDispatchCart()
  const [qnt, setqnt] = useState(1)
  const [size, setsize] = useState("")
  let data=useCart()
  const handleAddCart = async () => {
    await dispatch({type:"ADD",id: option._id, name: option.name, price: props.finalPrice, size:size, qnt:qnt})
    console.log(data)
  }
  let options = props.options;
  let option=props.foodIteam;
  let priceOptions = Object.keys(options);

  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={option.img} className="card-img-top" alt="..." style={{height: "150px", ObjectFit: "fill"}}/>
        <div className="card-body">
          <h5 className="card-title">{option.name}</h5>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success" onChange={(e)=>{setqnt(e.target.value)}}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success" onChange={(e)=>{setsize(e.target.value)}}>
            {priceOptions.map((i) => {
                return <option key={i} value={i}>{i}</option>
              })}
            </select>
            <div className='d-inline h-100 fs-5'>
                Total Price
            </div>
            {/* <hr />
            <button className='btn btn-success justify-center ms-2'>Add to Cart</button> */}
          </div>
          <hr />
          <button className='btn btn-success justify-center ms-2' onClick={handleAddCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
