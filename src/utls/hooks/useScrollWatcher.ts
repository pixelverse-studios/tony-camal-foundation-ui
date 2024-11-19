import { useEffect } from 'react'

const useScrollWatcher = (
  section: string,
  setActive: (section: string) => void
) => {
  //   const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null, // Defaults to the browser viewport if not specified
      rootMargin: '0px',
      threshold: 0.1 // Trigger callback when 10% of the target is visible
    }

    const observerCallback: IntersectionObserverCallback = entries => {
      entries.forEach(entry =>
        entry.isIntersecting ? setActive(section) : null
      )
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const currentSection = document.getElementById(section)
    if (currentSection) {
      observer.observe(currentSection)
    }

    // Cleanup the observer on component unmount
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [section, setActive])
}

export default useScrollWatcher
