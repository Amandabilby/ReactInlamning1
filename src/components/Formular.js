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
     //this.setState({title: e.target.elements.title.value})
     

  const res = await axios.post("http://localhost:1337/products", {

       title: e.target.elements.title.value,
       description: e.target.elements.description.value,
       price: e.target.elements.price.value
  
   })
   console.log(res)

    const data=  new FormData();
  
    data.append('files', this.state.image) //file från state
    data.append('ref', 'product') //collection
    data.append('refId', res.data.id)  // referens id
    data.append('field', 'image')// fältnamn
    
          
    /*  data.append('ref', 'product')
     data.append('refId', resPic.data.id)
     data.append('field',"image" )     
 */
//console.log(data)
     const  resPic = await axios.post("http://localhost:1337/upload",data) 
      console.log(resPic)}

    render(){
        return(
            <div className={"productForm"}>
               <h4>Lägg till ny tjänst </h4> 
                 <form className={"formular"} onSubmit={this.onSubmitToApi.bind(this)}>
                     Namn på tjänst: <input type="text" name="title"/><br/>
                     Beskrivning: <input type="text" name="description"/><br/>
                     Pris: <input type="number" name="price"/><br/>

                    Ladda upp bild: <br/> <input  type="file"
                      name="file" onChange={this.eventChange.bind(this)}/>
                     <br/>
                     <button className={"btn"}>Spara</button>
                     
                 </form>

            </div>

            
        )

        
    }
}

export default Adminform;


