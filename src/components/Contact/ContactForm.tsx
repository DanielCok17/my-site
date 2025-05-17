'use client'

import action from '@/actions/contact-form'
import { useActionState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'
import { useEffect, useState } from 'react'

const ContactForm = ({ t }: { t: any }) => {
  const [status, formAction, isPending] = useActionState(action, null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (status?.success) setMessage(t.form.success)
    else if (status?.message) setMessage(t.form.error)
    else setMessage('')
  }, [status, t])

  if (status?.success) {
    return (
      <p className="text-accent self-center text-center text-2xl font-medium">{t.form.success}</p>
    )
  }

  return (
    <form action={formAction} onSubmit={() => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
          event_label: 'Contact Form',
        });
      }
    }}>
      <Input label={t.form.fullName} id="name" name="name" placeholder={t.form.fullNamePlaceholder} required />
      <Input
        label={t.form.email}
        id="email"
        type="email"
        name="email"
        placeholder={t.form.emailPlaceholder}
        required
      />
      <Input label={t.form.subject} id="subject" name="subject" placeholder={t.form.subjectPlaceholder} />
      <Textarea
        label={t.form.message}
        id="message"
        name="message"
        placeholder={t.form.messagePlaceholder}
        rows={7}
        required
      />
      {!status?.success && <p className="my-2 font-light text-red-600">{message}</p>}
      <Button text={isPending ? t.form.submitting : t.form.submit} disabled={isPending} />
    </form>
  )
}

export default ContactForm
