'use client'

import { useState, useCallback, FormEvent } from 'react'
import { TextInput, LoadingOverlay } from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { FaUser, FaAt, FaUserTie } from 'react-icons/fa6'

import Logo from '@/assets/Bottom_transparent2.png'
import { handleResponseStatus } from '@/utls/http'
import styles from './Footer.module.scss'

const Footer = () => {
  const form = useForm({
    mode: 'controlled',
    initialValues: { firstName: '', lastName: '', email: '' }
    // validateInputOnChange: true,
    // validate: {
    //   firstName: hasLength({ min: 2 }, 'Must be at least 2 characters'),
    //   lastName: hasLength({ min: 2 }, 'Must be at least 2 characters'),
    //   email: isEmail('Invalid email')
    // }
  })

  const [loading, setLoading] = useState(false)

  const year = new Date().getFullYear()

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setLoading(true)
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST}/newsletter/${process.env.NEXT_PUBLIC_SLUG}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(form.getValues())
          }
        )
        return handleResponseStatus(
          res,
          notifications,
          'Newsletter subscription'
        )
      } catch (error) {
        console.warn(error)
        notifications.show({
          color: 'red',
          title: 'Error',
          message: 'There was an issue trying to subscribe to the newsletter'
        })
      } finally {
        setLoading(false)
        close()
      }
    },
    [form]
  )

  const canSubmit = Object.values(form.getValues()).every(val => val !== '')
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <section className={styles.subscribe}>
          <div className={styles.left}>
            <img src={Logo.src} alt="logo" />
          </div>
          <div className={styles.right}>
            <p>
              Join our newsletter to support and follow along with our growing
              community!
            </p>
            <form onSubmit={onSubmit}>
              <LoadingOverlay
                visible={loading}
                loaderProps={{ children: 'Loading...' }}
              />
              <div className={styles.doubleFields}>
                <TextInput
                  label="First Name"
                  leftSection={<FaUser />}
                  leftSectionPointerEvents="none"
                  size="md"
                  variant="filled"
                  {...form.getInputProps('firstName')}
                />
                <TextInput
                  label="Last Name"
                  leftSection={<FaUserTie />}
                  leftSectionPointerEvents="none"
                  size="md"
                  variant="filled"
                  {...form.getInputProps('lastName')}
                />
              </div>
              <TextInput
                label="Email"
                leftSection={<FaAt />}
                leftSectionPointerEvents="none"
                size="md"
                variant="filled"
                {...form.getInputProps('email')}
              />
              <button className={styles.submit} disabled={!canSubmit}>
                Submit
              </button>
            </form>
          </div>
        </section>
        <section className={styles.copyright}>
          Tony Camal Foundation &copy;{year}
        </section>
      </div>
    </footer>
  )
}

export default Footer
