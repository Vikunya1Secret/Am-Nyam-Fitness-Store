import { NextResponse } from "next/server";
import {posts} from './posts'

export async function Get(req:Request) {
    const {searchParams} = new URL(req.url)
    const query = searchParams.get('q')
    let currentPosts = posts
    if (query){
        currentPosts = posts.filter(post=>post.title.toLowerCase().includes(query.toLowerCase()))
    }
    return NextResponse.json(currentPosts)
}

export async function Post(req:Request) {
    const  body = await req.json()
    console.log(body);
    return NextResponse.json({body})
}