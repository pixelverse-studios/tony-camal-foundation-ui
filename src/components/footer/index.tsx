'use client'

import { useState, useCallback, FormEvent } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { TextInput, Modal, LoadingOverlay } from '@mantine/core'
import { hasLength, isEmail, useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { FaUser, FaAt, FaUserTie } from 'react-icons/fa6'

import { handleResponseStatus } from '@/utls/http'
import styles from './Footer.module.scss'

const Footer = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const form = useForm({
    mode: 'controlled',
    initialValues: { firstName: '', lastName: '', email: '' },
    validateInputOnChange: true,
    validate: {
      firstName: hasLength({ min: 2 }, 'Must be at least 2 characters'),
      lastName: hasLength({ min: 2 }, 'Must be at least 2 characters'),
      email: isEmail('Invalid email')
    }
  })

  const [loading, setLoading] = useState(false)

  const year = new Date().getFullYear()

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
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
      return handleResponseStatus(res, notifications, 'Newsletter subscription')
    } catch (error) {
      notifications.show({
        color: 'red',
        title: 'Error',
        message: 'There was an issue trying to subscribe to the newsletter'
      })
    } finally {
      setLoading(false)
      close()
    }
  }, [])

  return (
    <footer className={styles.footer}>
      <section className={styles.follow}>
        <p>
          Join our newsletter to support and follow along with our growing
          community!
        </p>
        <button onClick={open}>Subscribe</button>
        <Modal
          centered
          opened={opened}
          onClose={close}
          title="Join the newsletter"
          className={styles.subscribeModal}>
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
            <div className={styles.buttons}>
              <button className={styles.submit} disabled={!form.isValid()}>
                Submit
              </button>
              <button className={styles.cancel} onClick={close}>
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      </section>
      <section className={styles.copyright}>
        Tony Camal Foundation &copy;{year}
      </section>
    </footer>
  )
}

export default Footer
