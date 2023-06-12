<script>
import boxTemplate from '../components/boxTemplate.vue'
export default {
  name: 'CookArray',
  components: {
    boxTemplate
  },
  data() {
    return {
      Cooks: [
        {
          cook: 'Cookie Monster',
          location: 'Sesame Street',
          price: 69999,
          available: 'true',
          description: 'COOOOOKIE',
          image: 'https://m.media-amazon.com/images/M/MV5BNTE1MDc5YmItNDVjYS00M2I5LThiYjEtMDUzMjQzOGZkY2U0XkEyXkFqcGdeQXVyMTM1MjE2NjY5._V1_.jpg'
        },
        {
          cook: 'BBC',
          location: 'White House',
          price: 60000,
          available: 'false',
          description: 'Big boy chef, was the white house chef for Barack Obama during his reign as president. Have so much to offer, and will do it in style.',
          image: 'https://www.washingtonian.com/wp-content/uploads/2023/02/Chef-Andre-Rush_-Kitchen-Commando-9.jpg'
        },
        {
          cook: 'Gorden Ramsey',
          location: 'Britain',
          price: 1000000,
          available: 'true',
          description: 'Owner of multiple Michelin star restaurants, have achieved a total of 17 of them. Highest quality dishes in the world, and you can get that from me personally.',
          image: 'https://www.hachettebookgroup.com/wp-content/uploads/2017/06/GR.jpg?resize=500%2C700'
        },
        {
          cook: 'Chef Boyardee',
          location: 'On the Can',
          price: 5,
          available: 'true',
          description: 'Face of the can of Chef Boyardee Mini Raviolis. highest quality Italian ravioli and you wont be disappointed. ',
          image: 'https://www.wideopeneats.com/wp-content/uploads/sites/7/2021/05/chef-boyardee.png'
        },
        {
          cook: 'Donald Trump',
          location: 'Jail',
          price: 5000000,
          available: 'false',
          description: 'Best US President and self renowned chef. I have all the food to satisfy you and will do it for a cheap price and for your vote. ',
          image: 'https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90hfnfj11862999tqywv8tn3s7/public'
        },
        {
          cook: 'Chef Pisghetti',
          location: 'New York City',
          price: 100000,
          available: 'true',
          description: 'Bonjour mi amigos. I have all the high quality ravioli in my store, all are welcome and if you rent me I will personally deliver you some fresh spaghetti.',
          image: 'https://static.wikia.nocookie.net/curiousgeorge/images/f/fd/Chef_Pisghetti.png/revision/latest?cb=20180216172320a'
        },
      ]
    }
  }
}
</script>