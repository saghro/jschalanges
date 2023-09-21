document.addEventListener("DOMContentLoaded", function() {
    const cloneButton = document.getElementById("cloneButton");
    const deleteButton = document.getElementById("deleteButton");
    const itemList = document.getElementById("itemList");

    cloneButton.addEventListener("click", function() {
        const lastItem = itemList.lastElementChild.cloneNode(true);
        const itemCount = itemList.childElementCount + 1;
        lastItem.textContent = `Élément ${itemCount}`;
        itemList.appendChild(lastItem);
    });

    deleteButton.addEventListener("click", function() {
        const lastItem = itemList.lastElementChild;
        if (lastItem) {
            itemList.removeChild(lastItem);
        }
    });
});
