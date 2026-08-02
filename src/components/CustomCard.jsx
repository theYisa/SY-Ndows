import { useState, useEffect } from "react";
import '../fscreens/nav/app.css'

export default function CustomCard({newCount, persons }){
    const [count, changeCount] = useState(0);
    
    useEffect(()=>{
        let started = false;
        let currentCount = 0;

        function scrollController(){
            if (window.scrollY > 600 && started == false){
                started = true;                
                const interval = setInterval(()=>{
                    currentCount+= Math.ceil(newCount / 30);
                    changeCount(currentCount);

                    if (currentCount >= newCount){
                    clearInterval(interval);
                }}, 30)
            }
        }
        window.addEventListener('scroll', scrollController);
        return ()=> window.removeEventListener('scroll', scrollController);
    }, [newCount])
    
    return <div className="achieved">
                <p className="counter">{`${count}+`}</p>
                <p className="person">{persons}</p>
            </div>;
}