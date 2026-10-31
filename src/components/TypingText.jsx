import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const roles = [
  'Aspiring Software Developer',
  'Python Developer',
  'Computer Science Engineer',
]

export default function TypingText() {
  const [text, setText] = useState(roles[0])
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return undefined

    const currentRole = roles[roleIndex]
    const isComplete = text === currentRole
    const isEmpty = text.length === 0
    const delay = isComplete && !deleting ? 1500 : deleting ? 38 : 72

    const timeout = window.setTimeout(() => {
      if (isComplete && !deleting) {
        setDeleting(true)
      } else if (isEmpty && deleting) {
        setDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      } else {
        setText(currentRole.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [deleting, reducedMotion, roleIndex, text])

  return (
    <span className="typing-line" aria-label={roles[0]}>
      <span aria-hidden="true">{reducedMotion ? roles[0] : text}</span>
      {!reducedMotion && <span className="typing-cursor" aria-hidden="true" />}
    </span>
  )
}
