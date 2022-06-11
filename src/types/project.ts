import type { IContentItem, Elements } from '@kentico/kontent-delivery'

export type Item = IContentItem<{
  title: Elements.TextElement
  published: Elements.DateTimeElement
}>
