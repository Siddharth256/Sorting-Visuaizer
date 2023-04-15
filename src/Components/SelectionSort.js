export async function SelectionSort(arr, delay, setState) {
  let start = performance.now();
  console.log("Selection Sort");
  var i, j, min_idx;
  var n = arr.length;
  const copy = [...arr];
  for (i = 0; i < n - 1; i++) {
    min_idx = i;
    for (j = i + 1; j < n; j++) {
      if (copy[j] < copy[min_idx]) {
        min_idx = j;
      }
    }
    // Swap the minimum element with the first element of the unsorted part of the array
    var temp = copy[min_idx];
    copy[min_idx] = copy[i];
    copy[i] = temp;
    console.log('Swap');
    // Update the state with the current state of the sorting process
    await new Promise(resolve => setTimeout(resolve, delay));
    const sortedArr = copy.slice(0, i + 1).concat(arr.slice(i + 1));
    const selected = i + 1;
    const state = { arr: sortedArr, selected };
    setState(state);
  }
  let end = performance.now();
  console.log(end - start);
  return copy;
}
