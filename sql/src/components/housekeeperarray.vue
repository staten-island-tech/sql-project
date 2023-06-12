<script>
import boxTemplate from '../components/boxTemplate.vue'
export default {
  name: 'HousekeeperArray',
  components: {
    boxTemplate
  },
  data() {
    return {
      Housekeepers: [
        {
          housekeeper: 'Muscle Maid',
          location: 'Muscle Arena',
          price: 4000,
          available: 'true',
          description: 'I am buff man, will do anything for the household and our family',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DRmkf2KUGeah7b6eJ46C9AR2vPVmtm0nnkyG6CQ_OA&usqp=CAU&ec=48600112'
        },
        {
          housekeeper: 'Mr Clean',
          location: 'New York',
          price: 20000,
          available: 'true',
          description: 'Strong man who can clean using his own products. He is a well respected man who can get the job one.',
          image: 'https://media.bizj.us/view/img/10317260/screen-shot-2017-01-26-at-104603-am*750xx810-1080-105-0.jpg'
        },
        {
          housekeeper: 'Youtoob Teen',
          location: 'Youtube Headquarters',
          price: 1000,
          available: 'true',
          description: 'Truly wonderful man, will do anything in my power to help you and your garden.',
          image: 'https://i.ytimg.com/vi/410Mn_MVQyI/maxresdefault.jpg'
        },
        {
          housekeeper: 'Drip Baby',
          location: 'In the Crib',
          price: 9999,
          available: 'false',
          description: 'Itz me the baby from across town. I will eat your snacks and play wit the dogs',
          image: 'https://static.wixstatic.com/media/767064_3084763ed1de4b3db6da1408c7e2b05a~mv2.jpg/v1/fill/w_750,h_938,al_c,q_85/767064_3084763ed1de4b3db6da1408c7e2b05a~mv2.jpg',
        },
        {
          housekeeper: 'Grandpapa',
          location: 'In the Coffin',
          price: 10,
          available: 'true',
          description: 'Will clean your home mentally and physically from the skys.',
          image: 'https://as1.ftcdn.net/v2/jpg/00/47/36/14/1000_F_47361493_0u1oVdaMB8CAGGbNubBkq7ljIKMWi4xZ.jpg'
        },
        {
          housekeeper: 'man',
          location: 'Kenya',
          price: 15,
          available: 'true',
          description: 'Big boy man, will do all of your housekeeping and laundry and will also eat your cookies',
          image: 'https://media.istockphoto.com/id/1134506835/photo/hotel-room-cleaning-keeps-towels.jpg?s=612x612&w=0&k=20&c=t4xI48bG8kpSao3UdGeF6rp096205F72gtQ3sw_D9IA='
        },
      ]
    }
  }
}
</script>