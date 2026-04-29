import styles from './styles.module.css'
import type { HTMLAttributes } from 'react'

type Variant = 'title' | 'subtitle' | 'body'
type Weight = 'light' | 'regular' | 'bold'
type HtmlTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label'

interface Props extends HTMLAttributes<HTMLElement> {
  variant?: Variant
  weight?: Weight
  as?: HtmlTag
  children: React.ReactNode
}

const defaultTag: Record<Variant, HtmlTag> = {
  title: 'h1',
  subtitle: 'h2',
  body: 'p',
}

export const Typography = ({
  variant = 'body',
  weight = 'regular',
  as,
  className,
  children,
  ...rest
}: Props) => {
  const Tag = as ?? defaultTag[variant]

  return (
    <Tag
      className={`${styles.base} ${styles[variant]} ${styles[weight]} ${className ?? ''}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  )
}
