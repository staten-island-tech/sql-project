<script>
import { reactive } from 'vue'
export const monkeyItems = reactive([])
export default {
  data() {
    return {
      price: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      })
    }
  },
name: 'boxTemplate',
  props: {
    name: String,
    img: String,
    location: Number,
    price: String,
    Available: Boolean,
    Description: String,
    buttonLabel: String
  },
</script>
