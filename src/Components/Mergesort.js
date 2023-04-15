export async function MergeSort(arr, delay, setState) {
    const n = arr.length;
  
    // Merge function to merge two sorted arrays
    async function merge(arr, leftStart, leftEnd, rightEnd) {
      const left = arr.slice(leftStart, leftEnd + 1);
      const right = arr.slice(leftEnd + 1, rightEnd + 1);
  
      let i = 0;
      let j = 0;
      let k = leftStart;
  
      while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
          arr[k] = left[i];
          i++;
        } else {
          arr[k] = right[j];
          j++;
        }
        setState({ arr: arr, selected: k });
        await new Promise(resolve => setTimeout(resolve, delay));
        k++;
      }
  
      while (i < left.length) {
        arr[k] = left[i];
        setState({ arr: arr, selected: k });
        await new Promise(resolve => setTimeout(resolve, delay));
        i++;
        k++;
      }
  
      while (j < right.length) {
        arr[k] = right[j];
        setState({ arr: arr, selected: k });
        await new Promise(resolve => setTimeout(resolve, delay));
        j++;
        k++;
      }
    }
  
    // Merge adjacent pairs of elements
    for (let size = 1; size < n; size *= 2) {
      for (let leftStart = 0; leftStart < n - size; leftStart += 2 * size) {
        const leftEnd = leftStart + size - 1;
        const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
        await merge(arr, leftStart, leftEnd, rightEnd);
      }
    }
  
    return arr;
  }
  