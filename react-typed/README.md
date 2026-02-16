# タイピングアニメーション
## React Typed ライブラリ
https://www.npmjs.com/package/react-typed?activeTab=readme#installation

参考サイト：Next.jsでタイピングアニメーションを実装する方法
https://www.ryoma.online/nextjs-typing-animation-react-typed/

注意点：
react-typedは以下を使用するため、Client Componentである必要があります。
```
// これらは全てクライアント側でしか動かない
useState()        // 状態管理
useEffect()       // DOM操作のタイミング制御
document.querySelector()  // DOM操作
```
- Next.jsでは"use client"が必要（全てServer Componentだから）
- Viteでは"use client"不要（全てClient Componentだから）

