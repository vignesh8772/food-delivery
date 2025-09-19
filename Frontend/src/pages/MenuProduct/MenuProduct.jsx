import React from 'react'
import { menu_list } from '../../assets/frontend_assets/assets'
import "./menu.css";
const MenuProduct = ({category, setcategory}) => {
        
  return (
    <div className=''>
        <div className='box'>
            <h1 className='text-[#262626] text-3xl font-bold gap-5'>
                Explore Our Menu
            </h1>
            <p className='max-w-[60%]  '>Choose from a </p>
            <div className='flex justify-between items-center text-center overflow-x-scroll size1'>
                {
                    menu_list.map((items)=>{
                        return(
                            <div onClick={()=>{setcategory(prev=>prev==items.menu_name?"all":items.menu_name )}} key={crypto.randomUUID()}>
                                <img className={category==items.menu_name?"border-4 border-red-600 p-[4px] ":""} src={items.menu_image}/>
                                <p>{items.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr className='my-2 h-0.5 bg-blue-300 border-0' />
        </div>
    </div>
  )
}

export default MenuProduct
