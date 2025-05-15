import axios from 'axios';

const API_KEY=process.env.REACT_APP_CHATAPI_KEY;
const API_URL =process.env.REACT_APP_CHATAPI_URL;


export async function askChatGPT(userInput){
    try{
        const response= await axios.post(
            API_URL,{
                model: 'gpt-3.5-turbo',  // Use gpt-4 if needed
                messages: [{ role: 'user', content: userInput }],
                temperature: 0.7,
            },{
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${API_KEY}`,
            }
        }
        )
        console.log('Full response',response.data);
        return response.data.choices[0].message.content.trim();
    } catch (err) {
      console.error('ChatGPT API error:', err);
      return 'Sorry, I couldn’t fetch a response.';
    }
    }
