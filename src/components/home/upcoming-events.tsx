import { Card } from "antd"
import "./home.css";
import { CalendarOutlined } from "@ant-design/icons";
import { Text } from "../text";
import { useState } from "react";
import {List} from "antd";
import UpcomingEventsSkeleton from "../skeleton/upcoming-events";
import {Badge} from "antd";
import { getDate } from "@/utilities/helpers";
import { DASHBORAD_CALENDAR_UPCOMING_EVENTS_QUERY } from "@/graphql/queries";
import { useList } from "@refinedev/core";
import dayjs from "dayjs";
const UpcomingEvents = () => {
    const {data, isLoading}=useList({
        resource: 'events',
        pagination:{pageSize:5},
        sorters:[
            {
                field:'startDate',
                order:'asc'
            }
        ],
        filters:[
            {
                field:'startDate',
                operator:'gte',
                value: dayjs().format('YYY-MM-DD')
            }
        ],
        meta:{
            gqlQuery: DASHBORAD_CALENDAR_UPCOMING_EVENTS_QUERY
        }
    })
  return (
    <Card style={{height: '100%'}}
    className="custom-card-header custom-card-body"
    title={
        <div style={{
            display:'flex',
            alignItems:'center',
            gap:'8px'
        }}>
            <CalendarOutlined/>
            <Text size="sm" style={{marginLeft:"0.7rem"}}>
                Upcoming Events
            </Text>
        </div>
    }
    
    >
        {isLoading? (
            <List
            itemLayout="horizontal"
            dataSource={Array.from({length:5}).map((_,index)=>({
                id:index,
            }))}
            renderItem={()=><UpcomingEventsSkeleton/>}
            >

            </List>
        ):(
            <List
            itemLayout="horizontal"
            dataSource={data?.data ||[]}
            renderItem={(item)=>{
                const renderDate=getDate(item.startDate,item.endDate)
                return (
                    <List.Item>
                        <List.Item.Meta
                        avatar={<Badge color={item.color}/>}
                        title={<Text size="xs">{renderDate}</Text>}
                        description={<Text ellipsis={{tooltip:true}} strong>{item.title}</Text>}
                        />
                    </List.Item>
                )
            }}
            
            />
        )}
        {!isLoading && data?.data.length===0 && (
                <span style={{display:'flex',justifyContent:'center',alignItems:'center',height:"220px"}}>No Upcoming Events</span>
            ) }
         
    </Card>
  )
}

export default UpcomingEvents