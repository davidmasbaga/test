import { NextResponse } from "next/server";


export async function GET(req){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    console.log(data)
   return NextResponse.json(data);
}


