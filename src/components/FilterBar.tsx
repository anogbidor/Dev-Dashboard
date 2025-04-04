type FilterBarProps = {
  tags: string[]
  activeTag: string
  setActiveTag: (tag: string) => void
}

export default function FilterBar({
  tags,
  activeTag,
  setActiveTag,
}: FilterBarProps) {
  return (
    <div className='flex gap-2 flex-wrap mb-6'>
      {['All', ...tags].map((tag) => (
        <button
          key={tag}
          onClick={() => setActiveTag(tag)}
          className={`px-3 py-1 rounded-full border ${
            activeTag === tag ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
