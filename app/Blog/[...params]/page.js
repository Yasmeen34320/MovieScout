"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
    const {params}=useParams()
  return (
 <div >
      <h1>Blog Params</h1>
      <div>{JSON.stringify(params, null, 2)}</div>
    </div>
    
)
}
