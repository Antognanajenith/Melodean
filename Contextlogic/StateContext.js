import React,{useState,useEffect,useContext,createContext} from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {
  const [show,setShow] = useState("from context as show bhas");
  const [cartitems,setCartitems] = useState([]);
  const [totalprice,setTotalprice] = useState(0);
  const [totalquantity,setTotalquantity] = useState(0);
  const [oneqty,setOneqty] = useState(1);

  let foundProduct;
  let index;

  const deconeqt = ()=>{
    setOneqty((oneqty)=>{
        if((oneqty - 1 )< 1 )return 1;
        return oneqty-1;
    })
    }
  const inconeqt = ()=>{
    setOneqty((oneqty)=oneqty+1)
    }

   const onadd = (productone,quantitty)=>{
    const checkprodincart = cartitems.find((i)=>i._id === productone._id);
    console.log("checkprodincart",checkprodincart);
    setTotalprice((totalprice)=>totalprice + (productone.price * quantitty));
    setTotalquantity((totalquantity)=>totalquantity + quantitty);

    if(checkprodincart){
        const updatedcartitems = cartitems.map((cp)=>{
            if(cp._id === productone._id)return{
                ...cp,quantitty:cp.quantitty + quantitty
            }
        })
        setCartitems(updatedcartitems)
        console.log("updatedcartitems-",updatedcartitems);
    }else{
        productone.quantitty = quantitty;
        setCartitems([...cartitems,{...productone}]);
    }
    toast.success(`added ${productone.name } to our cart`)
   } 

   const onRemove  =(prod)=>{
    foundProduct = cartitems.find((item)=>item._id === prod._id);
    const newCartItems = cartitems.filter((item)=>item._id !== prod._id);

    setTotalprice((totalprice)=>totalprice-(foundProduct.price * foundProduct.quantitty));
    setTotalquantity((totalquantity)=>totalquantity - foundProduct.quantitty);
    setCartitems(newCartItems);
  }

   const toggleCTquantity = (id,value)=>{
    foundProduct = cartitems.find((item)=>item._id === id);
    index = cartitems.findIndex((produs)=>produs._id === id);
    const newCartItems = cartitems.filter((it)=>it._id !== id);

    if(value ==='inc'){
      setCartitems([...newCartItems,{...foundProduct,quantitty:foundProduct.quantitty+1}]);
      setTotalprice((totalprice)=>totalprice + foundProduct.price);
      setTotalquantity(totalquantity => totalquantity + 1);
    }else if(value === 'dec'){
      if(foundProduct.quantitty > 1){
        setCartitems([...newCartItems,{...foundProduct,quantitty:foundProduct.quantitty-1}]);
        setTotalprice((totalprice)=>totalprice - foundProduct.price);
        setTotalquantity(totalquantity => totalquantity - 1);
      }
    }

   }



  return(
    <Context.Provider
    value={{
        show,cartitems,totalprice,totalquantity,oneqty,deconeqt,inconeqt,onadd,
        toggleCTquantity,onRemove
    }}>
        {children}
    </Context.Provider>
  )
}


export const useStateContext = ()=> useContext(Context)
 