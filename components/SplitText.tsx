'use client'
import React, { useMemo, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export interface SplitTextProps {
  text: string
  className?: string
  // Our original simple API
  delayMs?: number
  duration?: number
  ease?: string | ((t: number) => number)
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  // Compatibility props with the usage example
  delay?: number
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars'
  from?: any
  to?: any
  threshold?: number
  rootMargin?: string
  textAlign?: React.CSSProperties['textAlign']
  onLetterAnimationComplete?: () => void
}

export default function SplitText({
  text,
  className = '',
  delayMs = 40,
  duration = 0.6,
  ease = 'power3.out',
  tag = 'p',
  // compatibility
  delay,
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.2,
  rootMargin = '0px',
  textAlign,
  onLetterAnimationComplete
}: SplitTextProps) {
  const rootRef = useRef<HTMLElement | null>(null)
  const parts = useMemo(() => {
    const useWords = splitType.includes('words')
    if (useWords) {
      return text.split(/(\s+)/).map((w) => (w === ' ' ? '\u00A0' : w))
    }
    // default: chars
    return Array.from(text).map((ch) => (ch === ' ' ? '\u00A0' : ch))
  }, [text, splitType])

  useGSAP(() => {
    if (!rootRef.current) return
    const spans = rootRef.current.querySelectorAll<HTMLSpanElement>('[data-piece]')

    const startPct = Math.max(0, Math.min(1, 1 - (threshold ?? 0.2))) * 100
    const start = `top ${startPct}% ${rootMargin || '0px'}`

    gsap.fromTo(
      spans,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: (delay ?? delayMs) / 1000,
        scrollTrigger: {
          trigger: rootRef.current,
          start,
          once: true
        },
        force3D: true,
        willChange: 'transform, opacity',
        onComplete: onLetterAnimationComplete
      }
    )
  }, { scope: rootRef })

  const Tag = tag as any

  return (
    <Tag ref={rootRef} className={className} style={{ display: 'inline-block', overflow: 'hidden', textAlign }}>
      {parts.map((c, i) => (
        <span
          key={i}
          data-piece
          style={{ display: 'inline-block', willChange: 'transform, opacity' }}
        >
          {c}
        </span>
      ))}
    </Tag>
  )
}


