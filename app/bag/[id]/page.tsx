import React from 'react'
import Shoppingbag from "./main"
export default function ItemId({params}: { params: {id : string} }) {
  return (
    <>
        <Shoppingbag idCrd={params.id} />
    </>
  )
}
