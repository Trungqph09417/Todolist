import { useState } from "react";


function App() {
  const [work, setWork] = useState('')
  console.log(work);
  return (
    <div className="flex gap-2 h-screen border border-orange-400 justify-center items-center">
     <input type="text" className="border outline-none border-blue-400 px-4 py-2"
      value={work}
      onChange={e => setWork(e.target.value)}
       />
     <button type="button" className="outline-none bg-blue-400 text-white px-4 py-2 rounded-md">Add</button>
    </div>
  );
}

export default App;
