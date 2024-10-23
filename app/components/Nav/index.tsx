import styles from './Nav.module.css'
import CTAButton from '../CTAButton'

const links = [
  { link: '#hero', label: 'Mission', type: 'link' },
  { link: '#testimonials', label: 'Testimonials', type: 'link' },
  { link: '#newslettersignup', label: 'Donate', type: 'button' }
]

const Nav = () => {
  const handleScroll = (hash: string) => {
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <h2>Tony Camal Foundation</h2>
        <div className={styles.menu_item_container}>
          {links.map((data, index) => {
            return data.type === 'link' ? (
              <div
                key={index}
                className={styles.link}
                onClick={e => {
                  e.preventDefault() // Prevent default anchor behavior
                  handleScroll(data.link) // Scroll to the section smoothly
                }}>
                <span>{data.label}</span>
              </div>
            ) : (
              <CTAButton key={index} label={data.label} />
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Nav
