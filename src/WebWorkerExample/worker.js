this.addEventListener('message', e => {
  if (e.data === 'hello') {
    const performHeavyCalculation = () => {
      // Simulate a heavy calculation
      let sum = 0
      for (let i = 0; i < 3 * 1000 * 1000 * 1000; i++) {
        sum += i
      }
      return sum
    }
    postMessage(performHeavyCalculation());
  }
});