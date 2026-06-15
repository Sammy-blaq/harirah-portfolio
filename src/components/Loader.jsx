export default function Loader({ loading }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#FFFCF8] flex flex-col items-center justify-center gap-6 transition-all duration-700 ${
        loading ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <p className="font-hand text-3xl text-[#5C3D2E]">Ajeka Harirah ✦</p>
      <div className="w-40 h-[3px] bg-[#E8DDD5] rounded-full overflow-hidden">
        <div className="h-full bg-[#C4714A] rounded-full loader-bar" />
      </div>
      <div className="flex gap-2">
        {[0, 200, 400].map((delay) => (
          <span
            key={delay}
            className="w-2 h-2 rounded-full bg-[#F2E0D5] dot-pulse"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </div>
  )
}
