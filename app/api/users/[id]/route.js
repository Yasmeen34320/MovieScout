import data from "@/data/data.json"




export async function DELETE(req,{params}){
    const {id}=await params;
const index = data.findIndex((u) => u.id === parseInt(id));
  if (index !== -1) {
    data.splice(index, 1); // mutate array by removing one item
  }
  
  return new Response(JSON.stringify(data) ,{status:200})

}

export async function PUT(req, { params }) {
  try {
    const newUser = await req.json();
    const { id } =await params;
console.log(id) 
    const userId = parseInt(id);
    const index = data.findIndex((u) => {
        console.log(u.id + " " + userId)
        return u.id == userId});

    if (index === -1) {
      return new Response("User not found", { status: 404 });
    }

    data[index] = {  ...newUser };

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("PUT Error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
