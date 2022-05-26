# What are design tokens?

> Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development. [Salesforce, Lightning Design System](https://www.lightningdesignsystem.com/design-tokens/)

# Install

```
npm install @taikai/taikai-design-tokens
```

# Use

**Import tokens that you need:**

```javascript
import {
  ColorBrandPrimary,
  SizeFontBase
} from '@taikai/taikai-design-tokens/build/web/taikai/tokens';
```

**Use them where you need them:**

Inline

```javascript
<div style={{ color: ColorBrandPrimary }}>awesome div</div>
```

Styled-Components

```javascript
const AwesomeComponent = styled.div`
  color: ${ColorBrandPrimary};
```

CSS

```css
div {
  color: ${ColorBrandPrimary};
}
```
