import React from 'react'
import { FaTree,FaRecycle  } from 'react-icons/fa'
import { TbTruckDelivery, } from "react-icons/tb";
import { GiChestnutLeaf } from "react-icons/gi";
type Props = {}

const data= [
    {
        title:'CONVINENCE',
        description:'With healty food delivery, you can have nutritious meal delivered right to your door, saving you time and effort in meal planning and grocery shopping',
        icon: FaTree
    },
    {
        title:'NUTRITIONAL BALANCE',
        description:'The meals are carefully prepared by experts chefs and nutrionists to ensure that they provide the right balance.   ',
        icon:TbTruckDelivery
    },
    {
        title:'FRESHNESS',
        description:'The meals are made fresh daily, ensuring that you are getting the most nutritious and delicious food possible. A healthy food delivery service can offer a wide range.',
        icon:GiChestnutLeaf
    },
    {
        title:'COST-EFFECTIVE',
        description:'Compared to eating out or ordering from expensive meal delivery services, a healthy food delivery service can be a cost effective way to ensure you are eating all without breaking the bank.',
        icon:FaRecycle 
    },
]

function ChooseUs({}: Props) {
  return (
    <div className='flex mb-20'>

        <div className='w-[50%]'>
            <div className="avatar flex items-center justify-center">
            <div className="w-[70%] rounded-full ring ring-white  ring-offset-4">
            <img src="/saladd.png" />
            </div>
        </div>
        </div>
        <div className='w-[50%] flex flex-col gap-6'>
            <h2 className='text-black font-extrabold text-xl ml-8'>WHY PEOPLE CHOOSE US?</h2>
            {
                data.map((item,index)=>(
                    <div key={index} className='flex items-center'>
                        <div className='w-[13%]'>
                            <item.icon className='text-[4rem] text-green-600' />
                        </div>
                    <div className='w-[70%]'>
                        <h4 className='font-semibold text-black'>{item.title}</h4>
                        <p className='text-sm'>{item.description}</p>
                    </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ChooseUs