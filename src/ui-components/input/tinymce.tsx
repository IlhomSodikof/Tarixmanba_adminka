import {useMemo, useRef, useState} from "react"
import { Box } from '@mui/material';
import JoditEditor from 'jodit-react';

interface props {
    updateMCE: (e: string) => void,
    defaultValue: string
}

export const UITinyMCE: React.FC<props> = ({updateMCE, defaultValue}) => {
    const editor = useRef(null);
	const [content, setContent] = useState(defaultValue || "");

	const config = useMemo(() => ({
        readonly: false,
        placeholder: 'Start typings...'
    }), []);

    const update = (e: string) => {
        setContent(e)
        updateMCE(e)
    }

    return (
        <Box>
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={(newContent) => update(newContent)}
            />
        </Box>
    );
}