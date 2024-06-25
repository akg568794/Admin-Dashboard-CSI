import  KanbanColumn  from "@/components/tasks/kanban/column"
import { KanbanBoardContainer,KanbanBoard } from "@/components/tasks/kanban/board"
import KanbanItem from "@/components/tasks/kanban/item"
import React from "react"

const List = () => {
  return (
    <>
    <KanbanBoardContainer>
        <KanbanBoard>
        <KanbanColumn>
            <KanbanItem>
                This is my first todo
            </KanbanItem>

        </KanbanColumn>
        <KanbanColumn>

        </KanbanColumn>

        </KanbanBoard>
        
    </KanbanBoardContainer>
    </>
  )
}

export default List