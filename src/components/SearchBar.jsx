import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search, Mic } from '@mui/icons-material';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    

    // Speech Recognition
    const { transcript,resetTranscript , browserSupportsSpeechRecognition } = useSpeechRecognition();
    const startListening = ()=> {
        resetTranscript();
        SpeechRecognition.startListening({ continuous: true, language:'en-IN' });
    };
    const stopListening = () => {
        SpeechRecognition.stopListening();
        setSearchTerm(transcript);
    };
    if (!browserSupportsSpeechRecognition) {
        return null
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }
    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
            }}
        >
            <input
                className='search-bar'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton 
            onTouchStart={startListening}
            onMouseDown={startListening}
            onTouchEnd={stopListening}
            onMouseUp={stopListening}
            type="submit" sx={{
                p: '10px',
                color: 'red',
                border: 'none'
            }}>
                <Mic />
            </IconButton>
            <IconButton type="submit" sx={{
                p: '10px',
                color: 'red',
                border: 'none'
            }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar;