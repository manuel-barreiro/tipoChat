export default function PrimaryButton({ text = "Button" }) {
  return (
    <button className="w-full rounded-full bg-primary p-4 shadow-primary duration-300 ease-in-out hover:drop-shadow-lg">
      <span className="text-body-large font-bold text-grey-900">{text}</span>
    </button>
  )
}
