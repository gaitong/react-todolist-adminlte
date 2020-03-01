import React, { Component } from 'react'
import Input from './Input'
import List from './List'
import uuid from 'uuid'

export default class Application extends Component {

    state={
        items:[],
        item:"",
        id:uuid(),
        isEditItem:false
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=>res.json())
        .then(json => {
            this.setState(
                {
                    items:json
                }
            )
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        const newItem = {
            id:this.state.id,
            title:this.state.item,
        }
        this.setState({
            items:[newItem, ...this.state.items],
            item:"",
            id:uuid(),
            isEditItem:false
        })
    }
    handleChange=(e)=>{
        this.setState({
            item:e.target.value
        })
    }
    handleEdit=(id)=>{
        const filterItems = this.state.items.filter(item=>item.id !== id);
        const selectItem = this.state.items.find(item=>item.id === id);

        this.setState({
            items:filterItems,
            item:selectItem.title,
            id:id,
            isEditItem:true
        })
    }
    handleDelete=(id)=>{
        const filterItems = this.state.items.filter(item=>item.id !== id);

        this.setState({
            items:filterItems  
        })
    }
    handleClear=()=>{
        this.setState({
            items:[],
            Item:"",
            id:uuid(),
            isEditItem:false
        })
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="container">
                <Input
                item={this.state.item}
                isEditItem={this.state.isEditItem}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                >
                </Input>
                <List
                    items={this.state.items}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    handleClear={this.handleClear}
                >
                </List>
                </div>
            </div>
        )
    }
}
