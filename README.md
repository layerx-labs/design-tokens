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
