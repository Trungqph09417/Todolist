import { useState } from "react";


function App() {
 
  const [work, setWork] = useState('')
  const [todolists, setTodolists] = useState([])
 const handleAdd=()=>{
  if(todolists?.some(item=> item.id === work.replace(/\s/g, ''))){
    setWork('') 
    return alert("công việc của bạn đã trùng")
  }else{

    setTodolists(prev => [...prev,{id:work.replace(/\s/g, ''),jod:work}])
    setWork('')
  }
 }
 const hanldleDelete=(id)=>{
         setTodolists(prev => prev.filter(item => item.id !== id))
 }
 console.log(todolists);
  return (
    <div className="flex flex-col gap-2 h-screen border border-orange-400 justify-center items-center">
      <div className="flex gap-4">
     <input type="text" className="border outline-none border-blue-400 px-4 py-2"
      value={work}
      onChange={e => setWork(e.target.value)}
       />
     <button onClick={handleAdd} type="button" className="outline-none bg-blue-400 text-white px-4 py-2 rounded-md">Add</button>
      </div>
      <div>
        <h3>Content</h3>
        <div>
          <ul>{todolists.length >0 && todolists?.map((item,index)=>{
            return   <li key={item.id} className="flex gap-2 my-2 "> 
            <span>{item.jod}</span> 
            <span onClick={()=>hanldleDelete(item.id)} className="cursor-pointer">x</span>
            </li>
          })}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
