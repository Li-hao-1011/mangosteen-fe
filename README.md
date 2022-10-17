# 我的 Vue 3 + TSX 项目

## 编码规范

### ref 默认值

推荐使用

```tsx
const div = ref<HTMLDivElement>();
```

不推荐使用

```tsx
const div = ref<HTMLDivElement | null>(null);
```

### 坑

1. `Center`组件的 extraClass 不起作用

## 如何开发

## 如何打包
