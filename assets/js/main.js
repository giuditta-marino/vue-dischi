Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data:{
    disks: []
  },

  mounted(){
    this.showdisks()
  },

  methods: {
    showdisks: function(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((response) => {
          this.disks = response.data.response;
        });
    }
  }



})
