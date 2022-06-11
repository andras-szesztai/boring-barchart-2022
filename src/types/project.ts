import type { IContentItem, Elements } from '@kentico/kontent-delivery'

export type TProject = IContentItem<{
  title: Elements.TextElement
  screenshot: Elements.AssetsElement
  tags: Elements.TextElement
  url: Elements.TextElement
  published: Elements.DateTimeElement
}>
