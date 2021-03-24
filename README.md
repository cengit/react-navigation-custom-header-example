# react-navigation-custom-header-example

## library
```json
"react-navigation": "^4.4.0",
"react-navigation-stack": "^2.8.2",
```
## 整个 stack 级别的自定义header, 放在 defaultNavigationOptions
```ts
defaultNavigationOptions:{
  header:<View><Text>default custom header</Text></View>
}
```

## 页面级别的自定义header, 放在 navigationOptions, 会覆盖stack的header
```ts
navigationOptions:{
  header:<View><Text>screen custom header</Text></View>
}
```
## 注：例子只包含 navigator 的设置，RN项目代码，screen页面需要自己定义