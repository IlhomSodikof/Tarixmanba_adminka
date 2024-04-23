import { Box } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';

interface props {
    updateMCE: (e: string) => void
}

export const UITinyMCE: React.FC<props> = ({updateMCE}) => {
    const [loading, setLoading] = useState<boolean>(true)
    
    const update = (e: string) => {
        updateMCE(e)
    }

    return (
        <Box>
                <Editor
                    apiKey='ykx1nqpmimf7wjh00ebqk2i101ln9x6ksv3tgqxvfs3w3l4m'
                    scriptLoading={{
                        async: true
                    }}
                    init={{
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        tinycomments_mode: 'embedded',
                        tinycomments_author: 'Author name',
                        mergetags_list: [
                            { value: 'First.Name', title: 'First Name' },
                            { value: 'Email', title: 'Email' },
                        ],
                        ai_request: ({respondWith}: {request: any, respondWith: any}) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                    }}
                    initialValue=""
                    onEditorChange={(a:string, _editor: any) => update(a)}
                />
            {/* )} */}
            
        </Box>
    );
}