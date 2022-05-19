import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseFoo',
  data () {
    return {
      msg: 'tsx123'
    }
  },
  created () {
    console.log(123)
  },
  render () {
    // return h('h1', {class: ['xxx']}, this.msg)
    return (
            <h1>{ this.msg }</h1>
    )
  }
})
