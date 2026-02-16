# Icons

## React Icons
- 人気のアイコンライブラリで、技術系ロゴが豊富
- npm/yarnでインストールして使用
- TypeScript対応
- サイズやカラーの調整が容易
```bash
npm install react-icons
```
```tsx
import { SiTypescript, SiReact } from 'react-icons/si';

<SiTypescript size={40} color="#3178C6" />
<SiReact size={40} color="#61DAFB" />
```

https://react-icons.github.io/react-icons/search/


## Simple Icons
- CDNから直接SVGを取得できる
- ダウンロード可能
- imgタグで簡単に使用可能
- URLで色のカスタマイズも可能
```tsx
<img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" />
<img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" />
```

https://simpleicons.org/


## Iconify
- 200,000以上のアイコンを統一されたAPIで使用可能
- 150以上のアイコンセットを統合（Material Design, Font Awesome, Simple Icons等）
- オンデマンド読み込みでバンドルサイズが小さい
- 柔軟なカスタマイズ（サイズ、色、回転、反転等）
```bash
npm install @iconify/react
```
```tsx
import { Icon } from '@iconify/react';

<Icon icon="simple-icons:typescript" width="40" color="#3178C6" />
<Icon icon="mdi:home" width="40" />
```

- Iconify for React  
https://iconify.design/docs/icon-components/react/

- アイコン検索（Simple Icons）  
https://icon-sets.iconify.design/simple-icons/


## 公式サイトからダウンロード
- 各技術の公式サイトからSVGファイルをダウンロードして使用
- 最も公式で正確なロゴが入手可能
- ブランドガイドラインに準拠

例：TypeScript  
https://www.typescriptlang.org/branding/