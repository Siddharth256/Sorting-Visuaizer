export async function QuickSort(arr, delay, setState) {
    const copy = [...arr];
    const n = copy.length;
  
    async function partition(low, high) {
      const pivot = copy[high];
      let i = low - 1;
  
      for (let j = low; j <= high - 1; j++) {
        if (copy[j] < pivot) {
          i++;
          const temp = copy[i];
          copy[i] = copy[j];
          copy[j] = temp;
          await new Promise(resolve => setTimeout(resolve, delay));
          setState({ arr: copy, selected: j });
        }
      }
      const temp = copy[i + 1];
      copy[i + 1] = copy[high];
      copy[high] = temp;
      await new Promise(resolve => setTimeout(resolve, delay));
      setState({ arr: copy, selected: high });
  
      return i + 1;
    }
  
    async function quickSortHelper(low, high) {
      if (low < high) {
        const pi = await partition(low, high);
        await quickSortHelper(low, pi - 1);
        await quickSortHelper(pi + 1, high);
      }
    }
  
    await quickSortHelper(0, n - 1);
    return copy;
  }
  