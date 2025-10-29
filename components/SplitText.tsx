'use client'
import React, { useMemo, useRef, useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'

type Piece = {
  value: string
  animate: boolean
}

export interface SplitTextProps {
  text: string
  className?: string
  delayMs?: number
  duration?: number
  ease?: string | ((t: number) => number)
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  delay?: number
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars'
  from?: any
  to?: any
  threshold?: number
  rootMargin?: string
  textAlign?: React.CSSProperties['textAlign']
  onLetterAnimationComplete?: () => void
  allowWrap?: boolean
}

export default function SplitText({
  text,
  className = '',
  delayMs = 40,
  duration = 0.6,
  ease = 'power3.out',
  tag = 'p',
  delay,
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.2,
  rootMargin = '0px',
  textAlign,
  onLetterAnimationComplete,
  allowWrap = false
}: SplitTextProps) {
  const rootRef = useRef<HTMLElement | null>(null)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    const evaluate = () => {
      const wideEnough = !allowWrap || window.innerWidth >= 640
      setShouldAnimate(!prefersReducedMotion.matches && wideEnough)
    }

    evaluate()

    const handleResize = () => evaluate()
    const handlePrefChange = () => evaluate()

    window.addEventListener('resize', handleResize)
    prefersReducedMotion.addEventListener('change', handlePrefChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      prefersReducedMotion.removeEventListener('change', handlePrefChange)
    }
  }, [allowWrap])

  const spaceChar = allowWrap ? ' ' : '\u00A0'

  const pieces = useMemo<Piece[]>(() => {
    if (!shouldAnimate) {
      return [{ value: text, animate: false }]
    }

    const useWords = splitType.includes('words')

    if (useWords) {
      const tokens = text.match(/\S+|\s+/g) ?? [text]
      return tokens.map((token) => {
        const isSpace = /^\s+$/.test(token)
        return {
          value: isSpace ? spaceChar : token,
          animate: !isSpace
        }
      })
    }

    return Array.from(text).map((ch) => {
      const isSpace = ch === ' '
      return {
        value: isSpace ? spaceChar : ch,
        animate: !isSpace
      }
    })
  }, [text, splitType, shouldAnimate, spaceChar])

  useGSAP(async () => {
    if (!shouldAnimate || !rootRef.current) return

    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ])
    gsap.registerPlugin(ScrollTrigger)

    const spans = rootRef.current.querySelectorAll<HTMLSpanElement>('[data-piece]')
    if (!spans.length) return

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
  }, { scope: rootRef, dependencies: [shouldAnimate, delay, delayMs, duration, ease, from, to, threshold, rootMargin, onLetterAnimationComplete] })

  const Tag = tag as any

  const baseStyle: React.CSSProperties = {
    display: allowWrap ? 'block' : shouldAnimate ? 'inline-block' : undefined,
    overflow: shouldAnimate ? 'hidden' : undefined,
    textAlign,
    whiteSpace: allowWrap ? 'normal' : undefined
  }

  if (!shouldAnimate) {
    return (
      <Tag ref={rootRef} className={className} style={baseStyle}>
        {text}
      </Tag>
    )
  }

  return (
    <Tag ref={rootRef} className={className} style={baseStyle}>
      {pieces.map((piece, i) => (
        piece.animate ? (
          <span
            key={i}
            data-piece
            style={{ display: 'inline-block', willChange: 'transform, opacity' }}
          >
            {piece.value}
          </span>
        ) : (
          <React.Fragment key={i}>{piece.value}</React.Fragment>
        )
      ))}
    </Tag>
  )
}


