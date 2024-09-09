export default function PrimaryButton({ text = "Button" }) {
  return (
    <button className="shadow-button-1 w-full rounded-full bg-primary p-4 duration-300 ease-in-out">
      <span className="text-body-large font-bold text-grey-900">{text}</span>
    </button>
  )
}
