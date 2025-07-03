import Bold from '@tiptap/extension-bold';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import TextStyle from '@tiptap/extension-text-style';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import Heading from '@tiptap/extension-heading';
import Underline from '@tiptap/extension-underline';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import History from '@tiptap/extension-history';
import Image from '@tiptap/extension-image';
import Blockquote from '@tiptap/extension-blockquote';

import { common, createLowlight } from 'lowlight'
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import HardBreak from '@tiptap/extension-hard-break';
import TextAlign from '@tiptap/extension-text-align';

const lowlight = createLowlight(common)

const getEditorExtensions = () => {

    return [
        Document,
        Text,
        TextStyle,
        Paragraph,
        Bold,
        Italic,
        Strike,
        Heading,
        Underline,
        BulletList,
        OrderedList,
        ListItem,
        History,
        Image.configure({
            inline: true,
        }),
        Blockquote,
        CodeBlockLowlight.configure({
            lowlight,
        }),
        HorizontalRule,
        HardBreak,
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
    ]
}


export default getEditorExtensions;