import React, { useState } from "react"


function Form({Operation, Send}) {
    const [Total, UpdateTotal] = useState(0)
    const inputChangeHandler = (e) => UpdateTotal(e.target.value);


    const onSubmit=(event)=> {
        event.preventDefault();
        Send(Total);
        UpdateTotal("")
    }
    return(
        <div>
            <h3>{Operation}</h3>
            <form onSubmit={onSubmit}>
                <input
                type="number"
                placeholder="Montant"
                onChange={inputChangeHandler}
                value={Total}
                />
                <input type="Submit" value="Recharge"/>
            </form>

        </div>
    )
}

export default Form;