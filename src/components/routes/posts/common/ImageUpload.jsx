import React from "react"
import { Button } from "@/components/ui/button"
import { CameraIcon, XIcon } from "lucide-react"

const ImageUpload = ({ images, onUpload, onRemove }) => {
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files)
    onUpload(files)
  }

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Images</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={() => document.getElementById("file-upload").click()}
        >
          <CameraIcon className="mr-2 h-4 w-4" /> Upload Image
        </Button>
        <input
          id="file-upload"
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(image)}
              alt={`Uploaded ${index + 1}`}
              className="h-24 w-full rounded-md object-cover"
            />
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="bg-red-500 absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full text-white"
            >
              <XIcon className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageUpload
