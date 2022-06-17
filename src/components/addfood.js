import React from 'react';


class AddFood extends React.Component{
    state={
        name:"",
        price:"",
    };
     add = (e) =>{
        e.preventDefault();
        if (this.state.name ==="" || this.state.price ===""){
            alert("Please fill in all the fields!");
            return
        }
        this.props.addFoodHandler(this.state)
        this.setState({name:"", price:""});
        console.log(this.state)
     }

    render() {
        return (
            <div className="ui main">
                <h2>Add food item</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Food name</label>
                    <input type="text" name="name" placeholder="Available foods now" 
                    value={this.state.name}
                    onChange={ (e) => this.setState({name: e.target.value})}/>
                </div>
                <div className="field">
                    <label>Food price ($)</label>
                    <input type="number" name="name" placeholder="Available foods now"
                    value={this.state.price}
                    onChange={ (e) => this.setState({price: e.target.value})}
                    />
                </div>
                <button className="ui button blue">Add</button>
            </form>
            </div>
        );
       
    }

}

export default AddFood;