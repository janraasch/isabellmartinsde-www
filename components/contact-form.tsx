"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSuccess(false)
    setIsError(false)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        body: new URLSearchParams(formData as any).toString(),
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        setIsError(true)
      }
    } catch (error) {
      console.error(error)
      setIsError(true)
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form 
      className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      data-netlify="true"
      data-netlify-honeypot="you-like-this-field"
      name="Kontakt (Mensch)"
      onSubmit={handleSubmit}
      method="POST"
    >
      <input type="hidden" name="form-name" value="Kontakt (Mensch)" />

      <div className="grid gap-4 sm:grid-cols-2">
        {/* For spam protection */}
        <div className="space-y-2 hidden">
          <Label htmlFor="you-like-this-field">Menschen, bitte nicht ausfüllen</Label>
          <Input id="you-like-this-field" name="you-like-this-field" className="hidden" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="vorname">Vorname</Label>
          <Input id="vorname" name="Vorname" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="nachname">Nachname</Label>
          <Input id="nachname" name="Nachname" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="E-mail-Adresse" type="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefon (optional)</Label>
        <Input id="phone" name="Telefon" type="tel" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Deine Nachricht</Label>
        <Textarea
          id="message"
          name="Text"
          placeholder="Wie kann ich Dir helfen? Teile mir gerne Deine Wünsche, Fragen oder Ziele mit."
          className="min-h-[120px]"
          required
        />
      </div>

      {!isSuccess && (
        <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
          {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
        </Button>
      )}

      {/* Success message */}
      {isSuccess && (
        <div className="rounded-md bg-green-50 p-4 text-sm text-green-800">Vielen Dank für Deine Anfrage!</div>
      )}

      {/* Error message */}
      {isError && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-800">
          Es gab ein Problem beim Senden Deiner Nachricht. Bitte versuche es später noch einmal oder kontaktiere mich
          direkt per E-Mail.
        </div>
      )}
    </form>
  )
}
