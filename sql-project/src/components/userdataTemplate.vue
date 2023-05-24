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
    species: String,
    img: String,
    price: Number,
    Habitat: String,
    dangerous: String,
    InStock: String,
    buttonLabel: String
  },
</script>
