import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import { Div,Form } from "./homePageStyle";
// import { Div } from "./homePageStyle";

const Home =()=>{
const [hideForm,setHideFrom] = useState<boolean>(false)
const [values,setValue] = useState<object>({
    taskName:''
})
const [datas,setData] = useState<any>([]) 
const showForm =()=>{
    setHideFrom(true);
}
const update=(obj:any)=>{
    setValue({...values,...obj});
}
const handleChange =(e:any)=>{
    const objName = e.target.name;
    const data = e.target.value;
    update({[objName]:data});
    }
const closeForm=(e:any)=>{
    e.preventDefault();
    let temp = datas;
    temp.push(values);
    setData([...temp]);
    setValue({
        taskName:'',})
    console.log(values);
    setHideFrom(false);
}
return(
    <Div>
        <div>
            <h2>Add your task below</h2>
            <button onClick={showForm}>Add Task</button>
        </div>
        <Form hide={hideForm} onSubmit={closeForm}>
            <input
            onChange={handleChange}
            id="task"
            name="taskName"
            type="text"
            placeholder="Enter the task name"
            />
            <button type="submit">Save</button>
        </Form>
        <div>
            {datas.map((value: { taskName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; },i: Key | null | undefined)=>(
                <div key={i}>
                    <p>{value.taskName}</p>
                </div>
            ))}
        </div>
    </Div>
);
}
export default Home;