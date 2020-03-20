import React, {Component} from "react"; 
 

export class Categories extends Component
{
    constructor()
    {
        super(); 
        this.state = {
            year_list: [],
            dom_data: ""
        }
        this.get_year_url = this.get_year_url.bind(this); 
        this.get_year_url(); 
    }

    get_year_url()
    {
        var url = "https://www.hitech.org.nz/awards/finalists/"; 
        const request = new XMLHttpRequest(); 
        request.open("get",url,false); 
        request.send(); 
        request.onload = function()
        {
            this.setState({dom_data: request.responseText}); 
            console.log(request.responseText); 
        }
    }


    render()
    {
        return (
            <div>
                <p>{this.state.dom_data}</p>
            </div>
        );
    }
}