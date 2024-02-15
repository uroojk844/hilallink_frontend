'use client'
import React from 'react';

import { MDXEditorProps,MDXEditorMethods } from "@mdxeditor/editor"
import dynamic from "next/dynamic"
import { forwardRef } from "react"

const Editor = dynamic(() => import('./Editor'), {
    ssr:false
})
export const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => <Editor {...props} editorRef={ref} />)

ForwardRefEditor.displayName = 'ForwardRefEditor'