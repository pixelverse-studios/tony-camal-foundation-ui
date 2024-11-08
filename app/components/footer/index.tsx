import { TextInput } from '@mantine/core'
import { hasLength, isEmail, useForm } from '@mantine/form'
import { FaUser, FaAt } from 'react-icons/fa6'
// import CallToAction from '../callToAction'

import styles from './Footer.module.css'

const Footer = () => {
  const form = useForm({
    mode: 'controlled',
    initialValues: { firstName: '', lastName: '', email: '' },
    validateInputOnChange: true,
    validate: {
      firstName: hasLength({ min: 2 }, 'Must be at least 2 characters'),
      email: isEmail('Invalid email')
    }
  })

  const copyright = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <section className={styles.newsletter}>
        <h2>Join our newsletter to stay up to date!</h2>
        <div className={styles.fields}>
          <TextInput
            label="First Name"
            leftSection={<FaUser />}
            leftSectionPointerEvents="none"
            size="md"
            variant="filled"
            {...form.getInputProps('firstName')}
          />
          <TextInput
            label="Email"
            leftSection={<FaAt />}
            leftSectionPointerEvents="none"
            size="md"
            variant="filled"
            {...form.getInputProps('email')}
          />
          <button className="callToAction" disabled={!form.isValid()}>
            Submit
          </button>
        </div>
      </section>
      <section>Tony Camal Foundation {copyright}&copy;</section>
    </footer>
  )
}

export default Footer
