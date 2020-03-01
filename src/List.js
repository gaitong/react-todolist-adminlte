import React, { Component } from 'react';
import Item from './Item';

export default class List extends Component {
    render() {

        const {items,handleEdit,handleDelete,handleClear} = this.props;

        return (
            <div>
                <div className="card card-body">
                    <h5>รายการทั้งหมด</h5>
                        <ul className="list-group">
                        {items.map(item=>{
                            return <Item
                            key={item.id}
                            item={item}
                            handleEdit={()=>handleEdit(item.id)}
                            handleDelete={()=>handleDelete(item.id)}
                            />
                        })}
                        </ul>
                    <button onClick={handleClear} className="btn btn-danger">Clear All</button>
                </div>
            </div>
        )
    }
}
