export async function BubbleSort(arr, delay, setState) {
  const n = arr.length;
  let i, j;
  let isSwapped = false;

  for (i = 0; i < n - 1; i++) {
    isSwapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
      await new Promise(resolve => setTimeout(resolve, delay));
      setState({ arr: arr, selected: j + 1 }); // set selected element for highlighting
    }
    setState({ arr: arr, selected: -1 }); // clear selected element
    if (!isSwapped) break;
  }
  return arr;
}
