import { useEffect, useRef } from "react";
import { Bold, Italic, List, ListOrdered } from "lucide-react";
import { cn } from "@/lib/utils";

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const RichTextEditor = ({ value, onChange, placeholder }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const executeCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleInput();
  };

  const toolbarButtons = [
    { icon: Bold, command: "bold", label: "Negrita" },
    { icon: Italic, command: "italic", label: "Cursiva" },
    { icon: List, command: "insertUnorderedList", label: "Lista con viñetas" },
    { icon: ListOrdered, command: "insertOrderedList", label: "Lista numerada" },
  ];

  return (
    <div className="border border-input rounded-lg overflow-hidden bg-background">
      {/* Toolbar */}
      <div className="flex gap-1 p-2 border-b border-border bg-secondary/30">
        {toolbarButtons.map(({ icon: Icon, command, label }) => (
          <button
            key={command}
            type="button"
            onClick={() => executeCommand(command)}
            className={cn(
              "p-2 rounded hover:bg-secondary transition-colors",
              "text-muted-foreground hover:text-foreground"
            )}
            title={label}
            aria-label={label}
          >
            <Icon className="w-4 h-4" />
          </button>
        ))}
      </div>

      {/* Editor Area */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className={cn(
          "min-h-[300px] p-4 outline-none",
          "prose prose-sm max-w-none",
          "font-serif text-foreground",
          "[&:empty]:before:content-[attr(data-placeholder)] [&:empty]:before:text-muted-foreground"
        )}
        data-placeholder={placeholder || "Escribe tu historia aquí..."}
      />
    </div>
  );
};

export default RichTextEditor;