"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const router = useRouter();
const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      setTimeout(() => {
        router.push('/Login');
      }, 2000);
    }
    // Fetch data from API on client side
    const fetchData = async () => {
      try {
        const res = await fetch("https://movie-scout-mzo1.vercel.app/api/users");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [status, router]);

  const truncateText = (text, limit) => {
    if (!text) return "";
    if (text.length <= limit) return text;
    const truncated = text.slice(0, limit);
    const lastSpaceIndex = truncated.lastIndexOf(" ");
    return (lastSpaceIndex === -1 ? truncated : truncated.slice(0, lastSpaceIndex)) + "...";
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/users/${id}`, { method: "DELETE" });
      setData((prevData) => prevData.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };
  const handle=async()=>{
    if(operation=='Add'){
    const res = await fetch('api/users',{method:"POST" , body:JSON.stringify({name:newuser.name,address:newuser.desc,avatar:"https://avatars.githubusercontent.com/u/4873909"})})
const res1=await res.json()
setShow(!show)
setData(res1)
setNewUser({name:"",desc:""})
    }else {
      const id = newuser.id
      console.log(newuser)
      const res = await fetch(`api/users/${id}`,{method:"PUT" ,
         headers: {
    "Content-Type": "application/json",
  },
        body:JSON.stringify({name:newuser.name,address:newuser.desc,avatar:newuser.img,id:newuser.id})})
        const res1 = await res.json()
        console.log("from the putfront " + res)
        setShow(!show)
        setData(res1)
        setNewUser({name:"",desc:""})
    }
  }
const [show,setShow]=useState(false)
const [newuser,setNewUser]=useState({
  name:"",
  desc:"",
  img:"https://avatars.githubusercontent.com/u/4873909",
  id:`${data.length+1}`
})
const handleEdit=(user)=>{
  setOperation('Edit')
    setNewUser({name:user.name,desc:user.address,img:user.avatar,id:user.id})
 
    setShow(!show)
}
const [operation,setOperation]=useState("Add")

  if (status === 'loading') return <p>Loading...</p>;
  if (!session) return <p className="text-red-700">Access denied please Login First</p>;
  return (
    <>
      <div className="w-full flex justify-around gap-2">
        <div className="text-center tracking-[.1em] text-yellow-100 text-2xl">Meet Our Team</div>
        <div onClick={()=>{
          setOperation('Add')
          setShow(!show)
        }} className="cursor-pointer bg-green-700 border-2 border-gray-800 shadow-lg rounded-full w-10 h-10 flex justify-center items-center">
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
      {
        (show)?(<>
        <div className="mt-4 flex gap-2 justify-around">
          <div className="flex gap-8 tracking-[.1em]">
            <label>Name</label>
            <input   name="name" className="text-sm py-1 px-2 shadow-lg border-2 border-gray-800 rounded" type="text" value={newuser.name} onChange={(event)=>{
              setNewUser({...newuser,[event.target.name]:event.target.value})
              // console.log(newuser)
            }}></input>
          </div>
          <div className="flex gap-8 tracking-[.1em]">
            <label>Desc</label>
            <input name="desc"  className="text-sm py-1 px-2 shadow-lg border-2 border-gray-800 rounded" type="text" value={newuser.desc} onChange={(event)=>{
              setNewUser({...newuser,[event.target.name]:event.target.value})
                          // console.log(newuser)

            }}></input>
          </div>
          <button onClick={handle} className="bg-purple-950 tracking-[.2em] text-white py-2 px-6 rounded text-sm ">
          <i className="fa-solid fa-plus mr-4"></i>

          {operation}</button>
        </div>
        </>)
        :(<></>)
      }
        <div  className=""></div>
      <div className="flex gap-4 flex-wrap justify-center p-6">
        {data.map((user) => (
          <div key={user.name} className="w-64 p-4 bg-gray-800 text-white rounded-lg shadow-md">
            <img
              src={user.avatar}
              alt={user.name}
              className="mx-auto w-16 h-16 rounded-full mb-4"
            />
            <h2 className="tracking-[.1em] mb-4 text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-400 text-sm">{truncateText(user.address, 40)}</p>
            <div className="mt-5 flex justify-around gap-4">
              <i onClick={() => handleEdit(user)} className="fa-solid fa-pen-to-square text-amber-400 cursor-pointer"></i>
              <i
                onClick={() => handleDelete(user.id)}
                className="fa-solid fa-trash-can text-red-700 cursor-pointer"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
