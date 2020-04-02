import React, {useState, useEffect} from "react";
import MaterialTable from "material-table";

function Table() {
    const [state, setState] = useState({
        columns: [
            {title:"Student Name", field:"childName"},
            {title:"Parent Name", field:"parentName"},
            {title:"Email", field:"email"}
        ],data:[],
    });
    
    useEffect(() => {
        async function getData() {

            // backend to get json data for table

            // const url="https://randomuser.me/api/?results=200&nat=us";
            // const response = await fetch(url);
            // const data = await response.json();
            // console.log(data.results);

            const users = data.results.map(user => {
                return {
                    childName: user.name.childName,
                    parentName: user.name.parentName,
                    email: user.email
                }
            })
            setState({...state, data: users})
        }
        getData();
    },[]);

    return (
        <MaterialTable 
            title=""
            columns={state.columns}
            data={state.data}/>
    );
}

export default Table;