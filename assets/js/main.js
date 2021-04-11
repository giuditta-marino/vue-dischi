Vue.config.devtools = true;

var app = new Vue({
  el: '#root',
  data:{
    selectedGenre: "",
    disks: [],
    selectedDisks: []
  },

  mounted(){
    this.showdisks()
  },

  methods: {
    showdisks: function(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((response) => {
          this.disks = response.data.response;
          console.log(this.disks);
        });
    },

    onChange(event) {
      console.log(event.target);
      console.log(event.target.value);

      let selected = event.target.value.toLowerCase();

      if (selected == "all") {
        console.log('notok');
        this.selectedDisks = this.disks;
        console.log(this.selectedDisks)

      } else {
        console.log('ok');
        console.log(this.disks);
        console.log(selected);
        console.log(this.selectedDisks);
        this.selectedDisks = [];
        console.log(this.selectedDisks);
        this.selectedDisks = this.disks.filter((disk, index) => {
          return disk.genre.toLowerCase() == selected;
        })
        console.log(this.selectedDisks);
      }
      //   console.log(jazzDisks);
      //   this.disks = jazzDisks;
      //   console.log(this.disks);
      // } else if (event.target.value == "pop") {
      //   console.log(disks);
      //   this.disks = disks;
      //   console.log(this.disks);
      //   const popDisks = this.disks.filter((disk, index) =>{
      //     return disk.genre == "Pop"
      //   })
      //   console.log(popDisks);
      //   this.disks = popDisks;
      //   console.log(this.disks);
      // } else if (event.target.value == "metal") {
      //   const metalDisks = this.disks.filter((disk, index) =>{
      //     return disk.genre == "Metal"
      //   })
      //   console.log(this.disks);
      //   console.log(metalDisks);
      //   this.disks = metalDisks;
      //   console.log(this.disks);
      // } else if (event.target.value == "rock") {
      //   const rockDisks = this.disks.filter((disk, index) =>{
      //     return disk.genre == "Rock"
      //   })
      //   console.log(rockDisks);
      //   this.disks = rockDisks;
      //   console.log(this.disks);
      // }
    }

    // cin jquery si faceva così
   //  let selected = $(this).val();
     //
     // let datiFiltered;
     // if (selected) {
     //  datiFiltered  = datiColors.filter((item) => item.type == selected);
   // } else {
   //  datiFiltered = datiColors;
   // }
  }



})
