import { Form, FormField } from "@/components/ui/form"
import TextInput from "@/components/common/input/TextInput"
import SelectInput from "@/components/common/input/SelectInput"
import TextAreaInput from "@/components/common/input/TextAreaInput"
import { UserIcon, EditIcon } from "@/assets/icons"
import FixedBottomButton from "@/components/common/buttons/FixedBottomButton"
import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next"

export default function RoomForm({ form, onSubmit, submitText }) {
  const { t } = useTranslation()

  const categoryOptions = [
    { label: t("my-rooms.roomForm.category.options.music"), value: "Music" },
    {
      label: t("my-rooms.roomForm.category.options.entertainment"),
      value: "Entertainment",
    },
    { label: t("my-rooms.roomForm.category.options.gaming"), value: "Gaming" },
    {
      label: t("my-rooms.roomForm.category.options.lifestyle"),
      value: "Lifestyle",
    },
  ]

  const ageOptions = [
    { label: t("my-rooms.roomForm.age.options.all"), value: "all" },
    { label: t("my-rooms.roomForm.age.options.18plus"), value: "18+" },
    { label: t("my-rooms.roomForm.age.options.21plus"), value: "21+" },
  ]

  const typeOptions = [
    { label: t("my-rooms.roomForm.type.options.public"), value: "Public" },
    { label: t("my-rooms.roomForm.type.options.private"), value: "Private" },
  ]

  const booleanOptions = [
    { label: t("my-rooms.roomForm.boolean.yes"), value: true },
    { label: t("my-rooms.roomForm.boolean.no"), value: false },
  ]

  const subCategoryOptions = [
    { label: t("my-rooms.roomForm.subCategory.options.pop"), value: "Pop" },
    { label: t("my-rooms.roomForm.subCategory.options.rock"), value: "Rock" },
    { label: t("my-rooms.roomForm.subCategory.options.jazz"), value: "Jazz" },
    {
      label: t("my-rooms.roomForm.subCategory.options.hipHop"),
      value: "Hip-Hop",
    },
    {
      label: t("my-rooms.roomForm.subCategory.options.classical"),
      value: "Classical",
    },
    {
      label: t("my-rooms.roomForm.subCategory.options.electronic"),
      value: "Electronic",
    },
    {
      label: t("my-rooms.roomForm.subCategory.options.country"),
      value: "Country",
    },
    {
      label: t("my-rooms.roomForm.subCategory.options.reggae"),
      value: "Reggae",
    },
  ]

  const languageOptions = [
    {
      label: t("my-rooms.roomForm.language.options.english"),
      value: "English",
    },
    {
      label: t("my-rooms.roomForm.language.options.spanish"),
      value: "Spanish",
    },
  ]

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
                <Label htmlFor="title">
                  {t("my-rooms.roomForm.title.label")}
                </Label>
                <TextInput
                  field={field}
                  placeholder={t("my-rooms.roomForm.title.placeholder")}
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
                <Label htmlFor="about">
                  {t("my-rooms.roomForm.about.label")}
                </Label>
                <TextAreaInput
                  field={field}
                  placeholder={t("my-rooms.roomForm.about.placeholder")}
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
                  {t("my-rooms.roomForm.category.label")}
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={categoryOptions}
                  placeholder={t("my-rooms.roomForm.category.placeholder")}
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
                  {t("my-rooms.roomForm.subCategory.label")}
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={subCategoryOptions}
                  placeholder={t("my-rooms.roomForm.subCategory.placeholder")}
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
                  {t("my-rooms.roomForm.language.label")}
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={languageOptions}
                  placeholder={t("my-rooms.roomForm.language.placeholder")}
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
                  {t("my-rooms.roomForm.age.label")}
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={ageOptions}
                  placeholder={t("my-rooms.roomForm.age.placeholder")}
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
                  {t("my-rooms.roomForm.type.label")}
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={typeOptions}
                  placeholder={t("my-rooms.roomForm.type.placeholder")}
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
                  {t("my-rooms.roomForm.indexRoom.label")}
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={booleanOptions}
                  placeholder={t("my-rooms.roomForm.indexRoom.placeholder")}
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
                  {t("my-rooms.roomForm.allowEmbed.label")}
                </Label>
                <SelectInput
                  field={field}
                  selectOptions={booleanOptions}
                  placeholder={t("my-rooms.roomForm.allowEmbed.placeholder")}
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
