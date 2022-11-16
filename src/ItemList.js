import Item from './Item';
import {useState} from 'react'

const ItemList = () => {
    
    const [listItems, setListItems] = useState([]);
    const [value, setValue] = useState('');
    
    function handleChange(e) {
        setValue(e.target.value);

    }

    function handleClick (e) {
        
        e.preventDefault();
        if (value ==='') {
            return
        }else {
            setListItems([
                ...listItems, 
                {
                    text: value,
                    isFinished: false,
                    id: 0
                }
                    
                
            ])
            setValue('');
            document.getElementById('lower-part').reset()
        }
        
    }
    
   
    return (
    <div className='item-list'>

        <div className="header">
            <div className="upper-part">
                <h1 className="title">Todo</h1>

                    <h4 className="counter">{listItems.filter(item => item.isFinished).length} task(S) done out of {listItems.length}</h4>
                
            </div>

        </div>
            
               <form id='lower-part'>
               
                <input className="search-bar"
                 type="search" 
                 placeholder="type..." 
                 
                 onChange={handleChange}
                  />
                <button className="add-button"  onClick={handleClick}> + </button>

                </form>
            
        {
            listItems.map((item, index) => {
                item.id = index;
                return <Item key={index} item={item} listItems={listItems} setListItems={setListItems}  />
                
            })
            
        }
        
    </div>
    
    
    );
    
}



export default ItemList;