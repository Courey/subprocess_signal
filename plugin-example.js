export default {
  sandbox: {
    start() {
      console.log("starting example sandbox plugin");
    },
    async end() {
      console.log("stopping example sandbox plugin");
      setTimeout(()=>{console.log("ONE SECOND")}, 1000)
      setTimeout(()=>{console.log("TWO SECOND")}, 2000)
      setTimeout(()=>{console.log("THREE SECOND")}, 3000)
      setTimeout(()=>{console.log("FOUR SECOND")}, 4000)
      setTimeout(()=>{console.log("FIVE SECOND")}, 5000)
      console.log("This log is after the async logs.")
    },
  },
};
