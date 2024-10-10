import { Form, FormField } from "@/components/ui/form"
import TextInput from "@/components/common/input/TextInput"
import SelectInput from "@/components/common/input/SelectInput"
import TextAreaInput from "@/components/common/input/TextAreaInput"
import { UserIcon } from "@/assets/icons"
import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"
import { Label } from "@/components/ui/label"

const typeOptions = [
  { label: "Music", value: "Music" },
  { label: "Entertainment", value: "Entertainment" },
  { label: "Gaming", value: "Gaming" },
  { label: "Lifestyle", value: "Lifestyle" },
]

export default function PostForm({ form, onSubmit, submitText }) {
  return (
    <section className="flex flex-col items-center gap-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
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

          <FixedBottomButton
            type="submit"
            text={submitText}
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            shadow={false}
            form={form}
            onClick={onSubmit}
          />
        </form>
      </Form>
    </section>
  )
}
