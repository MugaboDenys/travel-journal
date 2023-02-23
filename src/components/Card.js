import React from "react"


export default function Card(props) {
    console.log(props.card);
    return ( 
        <div className="flex items-center py-6 border-b-2 gap-5">
            <img src={props.card.imageUrl} alt="" className="w-[126px] h-[168px]" />
            <div className="py-5">
            <span className="flex gap-3 items-center">
                <img src="/images/Fill219.png" className="h-4" alt="" />
                <h4>{props.card.location}</h4>
                <a href={props.card.googleMapsUrl} className="text-neutral-400 text-sm duration-300 underline hover:no-underline">View on Google Maps</a>
            </span>
            <h3 className="text-4xl font-bold">{props.card.title}</h3>
            <h4 className="font-bold pt-6">{props.card.startDate} - {props.card.endDate}</h4>
            <p className="leading-snug">{props.card.description}</p>
            </div>
        </div>
     );
}
 
