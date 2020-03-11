// main function
async function quickSort(array, start, end){
  //console.log("swap")
  if (start >= end) return

  let border = await searchI(array, start, end)
  await Promise.all([quickSort(array, start, border - 1),
    quickSort(array, border + 1, end)])

}

// taking the last element as a pivot value
async function searchI(array, start, end) {
      let pivotV = array[end]
      let pivotI = start

      for (let i = start; i < end; i++) {
        if (array[i] < pivotV){
          await swap(array, i, pivotI)
          pivotI++
        }
      }

      await swap(array, pivotI, end)
      return pivotI
  }

// swap two elements
async function swap(arr, x, y) {
  await sleep(7)
  let temp = arr[y]
  arr[y] = arr[x]
  arr[x] = temp
}

const sleep = mas => new Promise(resolve => setTimeout(resolve, ms))
