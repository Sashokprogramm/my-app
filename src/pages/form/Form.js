import React from "react";

const Form = () => {
    return(
    
        <form>
            <div>
                <label htmlFor="nameUser">Name</label>
                <input type="text" id="nameUser" name="nameUser"/>
            </div>
            <div>
                <label htmlFor="phoneUser">Phone</label>
                <input type="text" id="phoneUser" name="User"/>
            </div>
        </form>
    )
}

export default Form