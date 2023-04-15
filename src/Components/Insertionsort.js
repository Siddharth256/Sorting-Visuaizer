export async function InsertionSort(arr, delay, setState) {
    const n = arr.length;
    const copy = [...arr];
    
    for (let i = 1; i < n; i++) {
      const key = copy[i];
      let j = i - 1;
      while (j >= 0 && copy[j] > key) {
        copy[j + 1] = copy[j];
        j--;
        setState({ arr: copy, selected: j + 1 }); // Highlight the current element being compared
        await new Promise(resolve => setTimeout(resolve, delay)); // Wait for delay milliseconds
      }
      copy[j + 1] = key;
      setState({ arr: copy, selected: j + 1 }); // Highlight the sorted element
      await new Promise(resolve => setTimeout(resolve, delay)); // Wait for delay milliseconds
    }
    
    return copy;
  }
  