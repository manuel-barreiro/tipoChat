import React, { useState, useEffect } from "react"
import { Form, FormField } from "@/components/ui/form"
import TextInput from "@/components/common/input/TextInput"
import SelectInput from "@/components/common/input/SelectInput"
import TextAreaInput from "@/components/common/input/TextAreaInput"
import { UserIcon } from "@/assets/icons"
import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"
import { Label } from "@/components/ui/label"
import { CameraIcon, XIcon } from "lucide-react"

const typeOptions = [
  { label: "Music", value: "Music" },
  { label: "Entertainment", value: "Entertainment" },
  { label: "Gaming", value: "Gaming" },
  { label: "Lifestyle", value: "Lifestyle" },
]

export default function PostForm({ form, onSubmit, submitText }) {
  const [images, setImages] = useState([])

  useEffect(() => {
    setImages(form.getValues("images") || [])
  }, [form])

  const handleImageUpload = (newImages) => {
    const updatedImages = [...images, ...Array.from(newImages)]
    setImages(updatedImages)
    form.setValue("images", updatedImages)
  }

  const handleImageRemove = (index) => {
    const updatedImages = images.filter((_, i) => i !== index)
    setImages(updatedImages)
    form.setValue("images", updatedImages)
  }

  const handleSubmit = (values) => {
    const formData = new FormData()
    Object.keys(values).forEach((key) => {
      if (key === "images") {
        values[key].forEach((image, index) => {
          if (image instanceof File) {
            formData.append(`image${index}`, image)
          } else {
            formData.append(`image${index}`, image)
          }
        })
      } else {
        formData.append(key, values[key])
      }
    })
    onSubmit(formData)
  }

  return (
    <section className="flex flex-col items-center gap-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex h-auto w-full flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <>
                <Label htmlFor="title" className="text-lg">
                  Post Title
                </Label>
                <TextInput
                  field={field}
                  placeholder="Title"
                  type="text"
                  id="title"
                  onBlur={() => form.trigger("title")}
                />
              </>
            )}
          />

          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <>
                <Label htmlFor="about" className="text-lg">
                  About this Post
                </Label>
                <TextAreaInput
                  field={field}
                  placeholder="About"
                  type="text"
                  icon={UserIcon}
                  id="about"
                  onBlur={() => form.trigger("about")}
                />
              </>
            )}
          />

          <Label className="text-lg">Post Price & Type</Label>

          <div className="flex items-end gap-5">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <div className="flex max-w-24 flex-col items-center gap-2">
                  <Label htmlFor="price" className="text-[10px] text-gray-500">
                    Leave empty for Free
                  </Label>
                  <TextInput
                    field={field}
                    type="number"
                    id="price"
                    placeholder="0"
                  />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <div className="flex-grow">
                  <Label htmlFor="type" className="sr-only">
                    Type
                  </Label>
                  <SelectInput
                    field={field}
                    selectOptions={typeOptions}
                    placeholder="Choose from List"
                    id="type"
                    className="w-full text-white placeholder-gray-400"
                  />
                </div>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <>
                <Label htmlFor="link" className="text-lg">
                  Post Link
                </Label>
                <TextInput
                  field={field}
                  placeholder="Insert URL"
                  type="text"
                  id="link"
                  onBlur={() => form.trigger("link")}
                />
              </>
            )}
          />

          {/* Image input and grid */}
          <div className="mt-4">
            <Label htmlFor="images" className="sr-only mb-2 block text-lg">
              Images
            </Label>
            <button
              type="button"
              onClick={() => document.getElementById("file-upload").click()}
              className="mb-4 flex w-full items-center justify-center rounded-full border-2 border-primary px-6 py-2 text-sm text-primary"
            >
              <CameraIcon className="mr-2 h-4 w-4" />
              <span>Upload Image</span>
            </button>
            <input
              id="file-upload"
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e.target.files)}
            />
            <div className="grid grid-cols-3 gap-2">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={
                      image instanceof File ? URL.createObjectURL(image) : image
                    }
                    alt={`Uploaded ${index + 1}`}
                    className="h-40 w-full rounded-md object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => handleImageRemove(index)}
                    className="bg-red-500 absolute right-1 top-1 flex h-7 w-7 items-center justify-center rounded-full text-red"
                  >
                    <XIcon className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <FixedBottomButton
            type="submit"
            text={submitText}
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            shadow={false}
          />
        </form>
      </Form>
    </section>
  )
}
