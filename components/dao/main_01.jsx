import {useEffect, useState} from "react";

export default function Main01(props) {

    const { body } = props;
    const [ obj, setObj ] = useState(null);

    useEffect(()=>{
        if(!body)return;
        setObj(body)
    },[body])

    return <div className="bg-white rounded-lg w-full px-12 py-8 mb-12 min-h-50" >
        <article className="prose prose-lg">
            <h2>Our Mission</h2>
            <p>{obj?.Mission}</p>
            <h2>Our Values</h2>
            <p>{obj?.Values}</p>
        </article>
    </div>
}
