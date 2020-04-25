![](C:\Users\Administrator\Desktop\vue组件通信\1715ef66f88e72cb.png)

-------先上代码---仓库地址  https://github.com/ydaidaiy/component_communication.git 

欢迎 Star，持续更新 



**Father**对于**Son**和**Daughter**来说为父组件。

**Son**对于**Father**为子组件，但是对于**GrandSonBySon**和**GrandDaughterBySon**为父组件。

**Daughter**对于**Father**为子组件，但是对于**GrandSonByDau**为父组件。

**Daughter**和**Son**有同一个父组件**Father**因此这两个组件互为兄弟组件。

------

通信的主要几种方法  >>>

------

```
注意：Vue 单向数据流 的原因所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定 父级 prop 的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外改变父级组件的状态，从而导致你的应用的数据流向难以理解。额外的，每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。
```

一，父传子 ------------------props v-bind(缩写为:)

```
父组件通过自定义属性暴露给子组件数据，子组件通过props 接收数据。
```

二，子传父

1,$emit v-on(缩写为@)

2,ref实例式伪通信

```
1，在子组件事件中，触发自定义事件--this.$emit('事件名','值') 传递给父组件，父组件中将事件绑定回父实例的函数上，第一个参数为子组件的传值。

2，利用ref实例式伪通信 直接获取子组件的数据，和操作子组件的方法。
```

三，兄弟之间

1,event bus

```
event bus 跨组件通信，注册为plugin的用法。注册为全局plugin之后，就可以通过this.$bus使用我们的event bus了。
A组件发送事件--- this.$bus.$emit('事件名', '值');
B组件接收事件--- this.$bus.$on('事件名',(payload)=>{console.log(payload)}) // 触发回调，payload是值
```

2，vuex