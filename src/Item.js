import React from "react";
import { useState } from "react";

const Item = ({item, listItems, setListItems })=> {
    

    

    async function handleCheckClick () {
        
            const setItems = listItems.map((ele, index) => {
                if (ele.text === item.text) {
                    return  {
                        ...item,
                        isFinished: !item.isFinished
                    }
                } else {
                  return  {
                        ...ele
                    }
                }

            })
   
        await setListItems(setItems)

        
        console.log(listItems)
        
        let counter = 0;
        setItems.forEach(element => {
            if (element.isFinished){
                counter++;
            }
        });
       
    }

    function handleDelete() {
        setListItems(listItems.filter(a =>  a.text !==  item.text )
        );
        

        let counter = 0;
        listItems.forEach(element => {
            if (element.isFinished){
                counter++;
            }
        });
      
    }

    return (
        <>

        <div className="info-div" key={item.id}>
            {item.isFinished?
            <p className="info" style={{textDecoration:'line-through'}}>{item.text}</p>:
            
            <p className="info">{item.text}</p>}
            <div className="info-buttons">
            <button className="info-button" onClick={handleCheckClick}>√</button>
            <button className="info-button" onClick={handleDelete}>X</button>
            </div>
        </div>
        
        </>
    )

}


export default Item