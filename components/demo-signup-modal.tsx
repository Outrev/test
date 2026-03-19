'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const demoSignupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  shop_name: z.string().min(2, 'Shop name must be at least 2 characters'),
})

type DemoSignupFormData = z.infer<typeof demoSignupSchema>

interface DemoSignupModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DemoSignupModal({ open, onOpenChange }: DemoSignupModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DemoSignupFormData>({
    resolver: zodResolver(demoSignupSchema),
  })

  const onSubmit = async (data: DemoSignupFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    try {
      const response = await fetch('/api/demo-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit form')
      }

      setSubmitSuccess(true)
      reset()
      setTimeout(() => {
        onOpenChange(false)
        setSubmitSuccess(false)
      }, 2000)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Schedule Your Free Demo</DialogTitle>
          <DialogDescription>
            Get started with Outrev and see how AI can transform your mechanic shop.
          </DialogDescription>
        </DialogHeader>

        {submitSuccess ? (
          <div className="py-8 text-center">
            <p className="text-lg font-semibold text-green-600 mb-2">Thank you!</p>
            <p className="text-muted-foreground">
              We'll be in touch soon to schedule your demo.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Full Name
              </label>
              <Input
                id="name"
                placeholder="John Smith"
                {...register('name')}
                className="w-full"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register('email')}
                className="w-full"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="shop_name" className="block text-sm font-medium text-foreground mb-1">
                Mechanic Shop Name
              </label>
              <Input
                id="shop_name"
                placeholder="Smith's Auto Repair"
                {...register('shop_name')}
                className="w-full"
              />
              {errors.shop_name && (
                <p className="text-sm text-red-500 mt-1">{errors.shop_name.message}</p>
              )}
            </div>

            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-sm text-red-800">{submitError}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1100bb] hover:bg-[#0d007a] text-white font-bold"
            >
              {isSubmitting ? 'Submitting...' : 'Get Started'}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
