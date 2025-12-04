// Q3 - Arrow function issue with this
const user = {
  name: "Bittu",
  showName: () => {
    console.log("Arrow this.name =", this.name); 
  }
};
user.showName();

// Fix using normal function
const userFixed = {
  name: "Bittu",
  showName: function(){
    console.log("Normal function this.name =", this.name);
  }
};
userFixed.showName();
