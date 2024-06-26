import { DndContext } from "@dnd-kit/core"
import { calc } from "antd/es/theme/internal"
import React from "react"

export const KanbanBoardContainer = ({children}:React.PropsWithChildren) => {
  return (
    <div
    style={{
        width:'calc(100% + 64px)',
        height:'calc(100% - 64px)',
        display:'flex',
        justifyContent:'center',
        margin:'-32px'
    }}
    >
        <div
        style={{
            width:'100%',
            height:'100%',
            display:'flex',
            padding:'32px',
            overflow:'scroll'
        }}
        >
            {children}

        </div>

    </div>
  )
}


export const KanbanBoard=({children}:React.PropsWithChildren)=>{
    return (
        <DndContext>
            {children}
        </DndContext>
    )
}