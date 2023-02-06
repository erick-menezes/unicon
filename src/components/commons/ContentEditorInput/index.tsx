import { useAuth } from '../../../contexts/auth';

import FirebaseUploadAdapter from '../../../services/storage/uploadAdapter';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';

export interface ContentEditorInputProps {
    contentText: string;
    onChangeContent: (data: string) => void;
}

const editorConfiguration: EditorConfig  = {
    placeholder: "Sobre o que deseja falar hoje?",
    toolbar: {
        removeItems: ['mediaEmbed']
    },
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
        ]
    },
   "link.addTargetToExternalLinks": true,
}

export function ContentEditorInput({ contentText, onChangeContent }: ContentEditorInputProps) {
    const { userAuthSession } = useAuth();

    console.log('contentText', contentText);

    return (
        <CKEditor
            editor={ ClassicEditor }
            data={contentText}
            onReady={ (editor) => {
                editor.plugins.get("FileRepository").createUploadAdapter = loader => {
                    return new FirebaseUploadAdapter(loader, String(userAuthSession?.uid));
                };
            }}
            config={editorConfiguration}
            onChange={(event, editor) => {
                const data = editor.getData();

                onChangeContent(data);
            }}
        />
    );
}
