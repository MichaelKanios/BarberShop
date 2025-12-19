export default function TimeSlots({ slots, onSelect }) {
  return (
    <div className="grid grid-cols-3 gap-2 my-4">
      {slots.map(slot => (
        <button
          key={slot.id}
          onClick={() => onSelect(slot.time)}
          className="border p-2 hover:bg-black hover:text-white"
        >
          {slot.time}
        </button>
      ))}
    </div>
  )
}
