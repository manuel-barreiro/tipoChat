import { Checkbox } from "@/components/ui/checkbox"
import {
  FormControl,
  FormItem,
  FormLabel,
  // FormMessage,
} from "@/components/ui/form"

export default function CheckboxDemo({ field, text }) {
  return (
    <FormItem className="flex flex-row items-center justify-center space-x-3 space-y-0 rounded-md p-2">
      <FormControl>
        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
      </FormControl>
      <div className="leading-none">
        <FormLabel className="text-body-medium">{text}</FormLabel>
      </div>
      {/* <FormMessage className="text-body-small text-red" /> */}
    </FormItem>
  )
}
