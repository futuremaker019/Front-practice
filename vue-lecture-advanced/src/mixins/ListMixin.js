import bus from '../utils/bus.js';

// mixin
export default {
  mounted() {
    bus.$emit('end:spinner');
  }
  // 재사용할 컴포넌트 옵션 & 로직
  // created() {
  //   bus.$emit('start:spinner');
  //   setTimeout(() => {
  //     this.$store
  //       .dispatch('FETCH_LIST', this.$route.name)
  //       .then(() => {
  //         console.log(this.$route.name + ' fetched');
  //         bus.$emit('end:spinner');
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, 1500);
  // }
};

// high-order-component
// export default function create() {
//     // 재사용할 컴포넌트 옵션
// }
