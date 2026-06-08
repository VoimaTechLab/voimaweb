import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function RichTextEditor({
  content,
  onChange,
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <EditorContent
      editor={editor}
      className="min-h-[400px] rounded-xl border p-4"
    />
  );
}