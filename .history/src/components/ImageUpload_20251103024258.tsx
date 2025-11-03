import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  imagePreview: string | null;
  onRemoveImage: () => void;
  isUploading?: boolean;
}

const ImageUpload = ({ onImageSelect, imagePreview, onRemoveImage, isUploading }: ImageUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileSelect = (file: File) => {
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      if (file.size <= 5 * 1024 * 1024) { // 5MB
        onImageSelect(file);
      } else {
        alert("La imagen debe ser menor a 5MB");
      }
    } else {
      alert("Solo se permiten archivos .jpg o .png");
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div className="space-y-3">
      {!imagePreview ? (
        <div
          onClick={handleClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all",
            isDragging 
              ? "border-primary bg-secondary/50" 
              : "border-border hover:border-primary/50 hover:bg-secondary/20",
            isUploading && "opacity-50 cursor-not-allowed"
          )}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png"
            onChange={handleInputChange}
            className="hidden"
            disabled={isUploading}
          />
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-base font-medium text-foreground">
                Arrastra tu foto aquí o haz clic para subir
              </p>
              <p className="text-sm text-muted-foreground">
                Formatos: .jpg o .png
              </p>
            </div>
          </div>
          
          {isUploading && (
            <div className="mt-4">
              <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                <div className="h-full bg-primary animate-pulse w-3/4"></div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Subiendo imagen...</p>
            </div>
          )}
        </div>
      ) : (
        <div className="relative">
          <img
            src={imagePreview}
            alt="Vista previa"
            className="w-full h-64 object-cover rounded-lg border border-border"
          />
          <button
            type="button"
            onClick={onRemoveImage}
            className="absolute top-2 right-2 bg-destructive text-destructive-foreground p-2 rounded-full hover:bg-destructive/90 transition-colors shadow-lg"
            disabled={isUploading}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
      
      <p className="text-xs text-muted-foreground">
        Sube imágenes en formato .jpg o .png. Tamaño máximo 5MB.
      </p>
    </div>
  );
};

export default ImageUpload;