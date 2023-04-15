export async function HeapSort(arr, delay, setState) {
    const n = arr.length;
    const copy = [...arr];
  
    // Heapify the array
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(copy, n, i, delay, setState);
    }
  
    // Extract elements from the heap one by one
    for (let i = n - 1; i >= 0; i--) {
      // Move the current root to the end
      const temp = copy[0];
      copy[0] = copy[i];
      copy[i] = temp;
  
      // Highlight the sorted element
      setState({ arr: copy, selected: i });
      await new Promise(resolve => setTimeout(resolve, delay)); // Wait for delay milliseconds
  
      // Heapify the reduced heap
      await heapify(copy, i, 0, delay, setState);
    }
  
    return copy;
  }
  
  async function heapify(arr, n, i, delay, setState) {
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2
  
    // If left child is larger than root
    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }
  
    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }
  
    // If largest is not root
    if (largest !== i) {
      // Swap the elements
      const temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
  
      // Highlight the elements being compared
      setState({ arr: arr, selected: [i, largest] });
      await new Promise(resolve => setTimeout(resolve, delay)); // Wait for delay milliseconds
  
      // Recursively heapify the affected sub-tree
      await heapify(arr, n, largest, delay, setState);
    }
  }
  