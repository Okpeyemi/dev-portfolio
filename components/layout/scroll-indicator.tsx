"use client"

interface ScrollIndicatorProps {
  currentSection: number
  onScroll: () => void
}

export default function ScrollIndicator({ currentSection, onScroll }: ScrollIndicatorProps) {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 max-lg:hidden">
      <div className="flex flex-col items-center gap-2">
        <div className="h-20 w-px bg-gray-500"></div>
        <button
          onClick={onScroll}
          className="vertical-text tracking-widest text-xs text-gray-400 hover:text-yellow-300 transition-colors"
        >
          SCROLL
        </button>
      </div>
    </div>
  )
}

