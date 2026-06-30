import React from 'react'

const UserIdPage = async ({params}) => {

    const {userId} = await params 
  return (
    <div>User_Id Page : {userId} </div>
  )
}

export default UserIdPage