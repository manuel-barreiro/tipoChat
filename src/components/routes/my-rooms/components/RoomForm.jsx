import { Form, FormField } from "@/components/ui/form"
import TextInput from "@/components/common/input/TextInput"
import SelectInput from "@/components/common/input/SelectInput"
import TextAreaInput from "@/components/common/input/TextAreaInput"
import { UserIcon, EditIcon } from "@/assets/icons"
import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"
import { Label } from "@/components/ui/label"

const categoryOptions = [
  { label: "Music", value: "Music" },
  { label: "Entertainment", value: "Entertainment" },
  { label: "Gaming", value: "Gaming" },
  { label: "Lifestyle", value: "Lifestyle" },
]

const ageOptions = [
  { label: "All Ages", value: "all" },
  { label: "18+", value: "18+" },
  { label: "21+", value: "21+" },
]

const typeOptions = [
  { label: "Public", value: "Public" },
  { label: "Private", value: "Private" },
]

const booleanOptions = [
  { label: "Yes", value: true },
  { label: "No", value: false },
]

const subCategoryOptions = [
  { label: "Pop", value: "Pop" },
  { label: "Rock", value: "Rock" },
  { label: "Jazz", value: "Jazz" },
  { label: "Hip-Hop", value: "Hip-Hop" },
  { label: "Classical", value: "Classical" },
  { label: "Electronic", value: "Electronic" },
  { label: "Country", value: "Country" },
  { label: "Reggae", value: "Reggae" },
]

const languageOptions = [
  { label: "English", value: "English" },
  { label: "Spanish", value: "Spanish" },
]

export default function RoomForm({ form, onSubmit, submitText }) {
  return (
    <section className="flex flex-col items-center gap-5">
      <div className="relative h-auto w-auto">
        <div className="overflow-hidden rounded-[20px]">
          <img
            src="/images/createAndEditRoom.png"
            alt="create/edit room image"
            title="placeholder room image"
            className="h-full w-full object-cover"
          />
        </div>
        <button className="absolute bottom-6 right-6">
          <EditIcon className="h-6 w-6 duration-300 ease-in-out hover:text-primary" />
        </button>
      </div>

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
                <Label htmlFor="title">Room Title</Label>
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
                <Label htmlFor="about">About this Room</Label>
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

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <>
                <Label htmlFor="category" className="sr-only">
                  Category
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={categoryOptions}
                  placeholder="Category"
                  id="category"
                />
              </>
            )}
          />

          <FormField
            control={form.control}
            name="subCategory"
            render={({ field }) => (
              <>
                <Label htmlFor="subCategory" className="sr-only">
                  Sub-Category
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={subCategoryOptions}
                  placeholder="Sub-Category"
                  id="subCategory"
                />
              </>
            )}
          />

          <FormField
            control={form.control}
            name="language"
            render={({ field }) => (
              <>
                <Label htmlFor="language" className="sr-only">
                  Language
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={languageOptions}
                  placeholder="Language"
                  id="language"
                />
              </>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <>
                <Label htmlFor="age" className="sr-only">
                  Age
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={ageOptions}
                  placeholder="Age"
                  id="age"
                />
              </>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <>
                <Label htmlFor="type" className="sr-only">
                  Type
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={typeOptions}
                  placeholder="Type"
                  id="type"
                />
              </>
            )}
          />

          <FormField
            control={form.control}
            name="indexRoom"
            render={({ field }) => (
              <>
                <Label htmlFor="indexRoom" className="">
                  Index Room?
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={booleanOptions}
                  placeholder="Index Room?"
                  id="indexRoom"
                />
              </>
            )}
          />

          <FormField
            control={form.control}
            name="allowEmbed"
            render={({ field }) => (
              <>
                <Label htmlFor="allowEmbed" className="">
                  Allow Embed?
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={booleanOptions}
                  placeholder="Allow Embed?"
                  id="allowEmbed"
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
