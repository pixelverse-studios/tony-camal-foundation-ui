import { useState, useMemo } from 'react'
import { Tabs, FloatingIndicator } from '@mantine/core'

import useWindowWidth from '@/utls/hooks/useWindowWidth'
import { TESTIMONIALS } from '@/utls/constants'
import styles from './Home.module.scss'

const Testimonials = () => {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null)
  const [value, setValue] = useState<string | null>(TESTIMONIALS[0].author)
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({})
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node
    setControlsRefs(controlsRefs)
  }

  const windowWidth = useWindowWidth()
  const layout = useMemo(
    () => (windowWidth >= 0 ? 'horizontal' : 'vertical'),
    [windowWidth]
  )

  return (
    <section
      id="testimonials"
      className={`fullViewSection ${styles.viewContent} ${styles.Testimonials}`}>
      <div className="pageContent">
        <h1>Testimonials</h1>
        <Tabs
          variant="none"
          orientation={layout}
          onChange={setValue}
          defaultValue={TESTIMONIALS[0].author}>
          <Tabs.List ref={setRootRef} className={styles.list}>
            {TESTIMONIALS.map(({ author }) => (
              <Tabs.Tab
                ref={setControlRef(author)}
                className={styles.tab}
                key={author}
                value={author}>
                {author}
              </Tabs.Tab>
            ))}
            <FloatingIndicator
              target={value ? controlsRefs[value] : null}
              parent={rootRef}
              className={styles.indicator}
            />
          </Tabs.List>
          {TESTIMONIALS.map(({ author, quote }, key) => (
            <>
              <Tabs.Panel value={author} key={key}>
                <article className="card">
                  <p>{quote}</p>
                  <p className="citation">{author}</p>
                </article>
              </Tabs.Panel>
            </>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default Testimonials
