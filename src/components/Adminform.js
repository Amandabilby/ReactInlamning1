
/*

DENNA SIDA ANVÄNDS EJ, SE Formular.js

import React, { Component } from "react";

import axios from "axios";



class Adminform extends Component{

    state={
         image:" "
    }
eventChange(e){
    console.log(e.target.files[0])
    this.setState({image:e.target.files[0]})
}


async onSubmitToApi(e){
    e.preventDefault();


    //console.log(e.target.elements.file.files[0])
     // this.setState({title: e.target.elements.title.value})
     

  const res = await axios.post("http://localhost:1337/products", {

       title: e.target.elements.title.value,
       description: e.target.elements.description.value,
       price: e.target.elements.price.value
   })
   console.log(res)

     const data=  new FormData();
  
    data.append("files", this.state.image)
    data.append("ref", "product")
    data.append("refId", res.data.Id)
    data.append("field", "image")
    
          
    /*  data.append('ref', 'product')
     data.append('refId', resPic.data.id)
     data.append('field',"image" )
      
 */
//console.log(data)
        // const res = await axios.post("http://localhost:1337/upload",data) 

   
    /*
console.log(res)


}

    render(){
        return(
            <div>
                 <form onSubmit={this.onSubmitToApi.bind(this)}>
                     <input type="text" name="title"/>
                     <input type="text" name="description"/>
                     <input type="number" name="price"/>

                     <input type="file"
                      name="file" onChange={this.eventChange.bind(this)}/>
                     
                     <button>Spara</button>
                     {this.state.title}
                 </form>

            </div>
        )
    }
}

export default Adminform; 
*/

/*
import React, { Component } from "react";

import axios from "axios";



class Adminform extends Component{

    state={
         title:" "
    }

async onSubmitToApi(e){
    e.preventDefault();


    //console.log(e.target.elements.file.files[0])
     this.setState({title: e.target.elements.title.value})

   const res = await axios.post("http://localhost:1337/products", {

         title: e.target.elements.title.value,
         description: e.target.elements.description.value,
         price: e.target.elements.price.value,
         image: "nån text"
     })


    
console.log(res)


}

    render(){
        return(
            <div>
                 <form onSubmit={this.onSubmitToApi.bind(this)}>
                     hallå?
                     <input type="text" name="title"/>
                     <input type="text" name="description"/>
                     <input type="number" name="price"/>

                     <input type="file" name="file"/>
                     
                     <button>Spara</button>
                     {this.state.title}
                 </form>

            </div>
        )
    }
}

export default Adminform; */