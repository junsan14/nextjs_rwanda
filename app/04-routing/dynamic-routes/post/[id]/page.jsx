'use client'
import { use } from 'react'

export default function Page({params}){
	const { id } = use(params)
	return(
		<>
			Hello this is a blog article.
			ID:{id}
		</>
		)
}

