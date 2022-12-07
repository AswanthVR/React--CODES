import React ,{Component}from "react";

class  CustomAttribute extends Component{
    render(){
        return(
    <div>
     <h4>Basically attribute we are using HTML also,injsx we can use camelcase. </h4>
    <h4>for custom attributes in jsx we can use different format: data-prefix</h4>
    <h5>************jsx custom attribute**********</h5>
    <p data-hello="demo"> welcome to custom attribute in jsx</p>
    </div>
        );
    }
}
export default CustomAttribute;