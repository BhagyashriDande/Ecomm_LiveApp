import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/dress/a/x/z/l-na-awd-19-yellow-aarvia-original-imagzffm3bkyzup2.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">Women Bodycon Yellow Dress</p>
          <p className="opacoty-70">Size:L,Yellow</p>
          <p className="opacity-70 mt-2">Seller: Aarvia</p>

          <div className="flex space-x-5 item-center  text-gray-900 pt-6">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-500 font-semibold"> 5% Off</p>
          </div>
        </div>

        
      </div>
      <div className="lg:flex items-center lg:space-x-10pt-4">
        <div className="flex items-center space-x-2">
        <IconButton>
        <RemoveCircleOutlineIcon />
        </IconButton>
        <span className="py-1 px-7 border rounded-sm"> 3</span>
        <IconButton sx={{color:"RGB(145 85 253)"}}>
        <AddCircleOutlineIcon />      
          </IconButton>
      

        </div>
          <div>
            <Button sx={{color:"RGB(145 85 253)"}}>remove</Button>
          </div>


        </div>
    </div>
  );
};

export default CartItem;
