import { useState } from "react";
import { useEmojiContext } from "../context/EmojiContext";
function Emoji(props){
    const [mood, setMood] = useState(props.symbol)
    const [label, setLabel] = useState(props.label)
    const {currentEmoji, handleUpdateEmoji} = useEmojiContext();
    const changeMood = () =>{
    if (mood != "😞"){
        setMood("😞")
        setLabel('disappointed face')

    }
    else{
    setMood(props.symbol)
    setLabel(props.label)
   }
}
   
    return(
        <>
        <span className="emoji"
        role="img"
        aria-label= {label}
        aria-hidden={label}>
            {mood}
        </span>
        <button onClick={() => changeMood()}>Switch Mood</button>
        </>
    )
}
Emoji.defaultProps ={
    label: "Happy",
    symbol: "😃",
}
export default Emoji;
