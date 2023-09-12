function deleteSelectedItems() {
  const itemList = document.getElementById("itemList");
  const selectedOptions = Array.from(itemList.selectedOptions);

  selectedOptions.forEach((option) => {
    itemList.removeChild(option);
  });

  if (itemList.options.length === 0) {
    alert("List is empty");
  }
}
