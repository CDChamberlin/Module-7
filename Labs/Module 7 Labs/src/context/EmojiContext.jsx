import { createContext, useContext, useState } from "react";

const EmojiContext = createContext()

export const EmojiProvider = (props) => {
    const [currentEmoji, setCurrentEmoji] = useState({})
    const handleEmojiUpdate = (emoji) => {
        setCurrentEmoji(emoji)
    }
    return (
        <EmojiContext.Provider value={{currentEmoji, handleEmojiUpdate}}>
            {props.children}
        </EmojiContext.Provider>
    )
}

export const useEmojiContext = () => {
    return useContext(EmojiContext)
}