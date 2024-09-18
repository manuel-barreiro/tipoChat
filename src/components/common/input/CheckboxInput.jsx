import { Checkbox } from "@/components/ui/checkbox"
import { FormControl, FormItem, FormLabel } from "@/components/ui/form"
import { forwardRef } from "react"

const CheckboxInput = forwardRef(({ field, text, onKeyDown }, ref) => {
  return (
    <FormItem className="flex flex-row items-center justify-center space-x-3 space-y-0 rounded-md p-2">
      <FormControl>
        <Checkbox
          checked={field.value}
          onCheckedChange={field.onChange}
          ref={ref}
          onKeyDown={onKeyDown}
        />
      </FormControl>
      <div className="leading-none">
        <FormLabel className="text-body-medium">{text}</FormLabel>
      </div>
    </FormItem>
  )
})

CheckboxInput.displayName = "CheckboxInput"

export default CheckboxInput
