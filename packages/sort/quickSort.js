function partition(nums, low, high) {
  let i = low;
  let j = high;
  let pivot = nums[i];

  while (i < j && nums[j] > pivot) {
    j--;
  }
  if (i < j) {
    swap(nums, i++, j);
  }
  while (i < j && nums[i] < pivot) {
    i++;
  }
  if (i < j) {
    swap(nums, i, j--);
  }

  return i;
}

function quickSort(nums, low, high) {
  let mid;

  if (low < high) {
    mid = partition(nums, low, high);
    quickSort(nums, low, mid - 1);
    quickSort(nums, mid + 1, high);
  }

  return nums;
}

function swap(nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}
