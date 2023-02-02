
import { FormItem } from "./FormItem";

export const MultiStepForm = (props) => {




  return (
    <div className="text-left">
      {
        props.list[props.step - 1].items?.map((item, index) => {
          return (
            <FormItem key={`${index}_${item.label}`} item={item} />
          )
        })
      }
    </div>
  )
}
