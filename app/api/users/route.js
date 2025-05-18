import data from "@/data/data.json"
export function GET(req){
    console.log("data is " + data);
return new Response(JSON.stringify(data,null,2),{
    status:200 
})
}

export async function POST(req){
    const newData=await req.json()
    console.log("from the post"+newData);
    data.push({...newData,id:data.length+1})
    return new Response(JSON.stringify(data))
}