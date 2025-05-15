import React, {useState} from "react";
import {askChatGPT} from './ChatService';

export default function ChatBox(){
    const [input,setInput] = useState('');
    const [response,setResponse] = useState('');
    const [servings,setServings] = useState(1);
    const [loading,setLoading] = useState(false);



    const handleAsk=async()=>{
        setLoading(true);
        try{
            const reply= await askChatGPT(`${input}.Make it for ${servings} servings.`);
            setResponse(reply)
        }catch(err){
            setResponse('Something went wrong')
        }
        setLoading(false)
    }
    return (
        <div className="chat-container">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={4}
            placeholder="Ask for recipe help..."
            className="chat-input"
          />
          <div style={{ margin: '10px 0' }}>
            <label>Servings: </label>
            <button onClick={() => setServings((s) => Math.max(1,s-1))}>-</button>
            <span style={{ margin: '0 10px' }}>{servings}</span>
            <button onClick={() => setServings((s) => s + 1)}>+</button>
         </div>
          <div className="chat-options">
          <button onClick={() => setInput("Show me a vegan recipe")}>Vegan</button>
          <button onClick={() => setInput("Show me a low carb recipe")}>low carb</button>
          <button onClick={() => setInput("Show me a high protein recipe")}>high protein</button>
          </div>
          
          <button onClick={handleAsk} disabled={loading} className="ask-btn">
            {loading ? 'Thinking...' : 'Ask AI'}
          </button>
          {response && (
            <div className="chat-response">
              {response}
            </div>
          )}
        </div>
      );

}



