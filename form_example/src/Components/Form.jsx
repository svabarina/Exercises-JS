import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            firstName: "",
            lastName: "",
            phone: "",
            email: ""
        }
    }

    handlerChange = (event) => {
        // console.log(event.target.name, event.target.value);
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value // value = valoarea
        // ^ se scrie cu [ ] sa iei VALOAREA din name. name = KEY  ! ! !!! !!
        });
    }

    handleSubmit = (event) => {  // pastreaza contextul in care suntem  !!
        event.preventDefault();
        this.setState({
            firstName: "",
            lastName: "",
            phone: "",
            email: ""
        });
        // console.log(event);
        console.log("submit = ", this.state);
    }

    render() {
        // console.log(this.state);
        return(
            <form
            onSubmit={this.handleSubmit} 
            style={{ display: 'flex', flexDirection: 'column', width: '50%'}}>
                <label>
                    Fist Name
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handlerChange}/>
                </label>
                <label>
                    Last Name
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handlerChange}/>
                </label>
                <label>
                    Phone
                    <input type="text" name="phone" value={this.state.phone} onChange={this.handlerChange}/>
                </label>
                <label>
                    Email
                    <input type="text" name="email" value={this.state.email} onChange={this.handlerChange}/>
                </label>
                <input type="submit"/>
            </form>
        )
    }
}

export default Form;