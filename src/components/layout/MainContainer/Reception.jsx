import React from 'react'

import ModalReception from './Component/Modal-reception'

import FloorPlanReception from './FloorPlanReception'
import axios from 'axios'
import useLayoutStore from '../../../Stores/layout-store'
import useSummaryStore from '../../../Stores/summary-store'

export default function Reception() {

    const setRBOpen = useLayoutStore(state=>state.setRBOpen)
    const setTable = useSummaryStore(state=>state.setTable)
    const setSummary = useSummaryStore(state=>state.setSummary)

    const hdlCheckIn = async (table)=>{
        try {
            const body = {tableName : "table"+table , status : "ORDERING"}
            console.log(body)
            const resp = await axios.patch("http://localhost:8000/table/",body)
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
        }
    const hdlCheckOut = async (table)=>{
        try {
             setTable(table)
            await setSummary()
             setRBOpen()
            


        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="flex flex-1 mx-auto my-auto">
        <FloorPlanReception reception={true} hdlCheckIn={hdlCheckIn} hdlCheckOut={hdlCheckOut} />
        
    </div>
  )
}
