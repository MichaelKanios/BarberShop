export default function DatePicker({ onSelect }) {
  return (
    <input
      type="date"
      onChange={(e) => onSelect(e.target.value)}
      className="border p-2 w-full"
    />
  )
}
