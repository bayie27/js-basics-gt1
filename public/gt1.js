window.onload = function () {
    // #1 Operator Sum
    let a1 = 2, b1 = 3, c1 = 4;
    let result1 = a1 + b1 + c1 + 100;
    alert(`#1 Operator Sum: ${result1}`); // 109

    // #2 Operator Sum & Difference
    let a2 = 2, b2 = 3;
    let result2 = a2 + b2 + 200 - 500;
    alert(`#2 Operator Sum & Difference: ${result2}`); // -295

    // #3 MDAS Operation
    const addOperator = (a, b, c, d) => a + b + c + d;
    let result3 = addOperator(2, 3, 4, 5);
    alert(`#3 MDAS Operation: ${result3}`); // 14

    // #4 Two MDAS Operations and Comparison
    const subOperator = (a, b, c, d) => a - b - c - d;
    let resultA = addOperator(2, 3, 4, 5); // 14
    let resultB = subOperator(2, 3, 4, 5); // -10

    if (resultA > resultB) {
        alert(`#4 Two MDAS Operations: Result A (${resultA}) is greater than Result B (${resultB})`);
    } else if (resultA < resultB) {
        alert(`#4 Two MDAS Operations: Result B (${resultB}) is greater than Result A (${resultA})`);
    } else {
        alert(`#4 Two MDAS Operations: Result A (${resultA}) is equal to Result B (${resultB})`);
    }

    // Sort Coke Images
    const sortButton = document.getElementById('sort-button');
    const cokeImagesContainer = document.getElementById('coke-images');
    const sortIndicator = document.getElementById('sort-indicator');
    let isAscending = true;

    sortButton.addEventListener('click', () => {
        const cokeItems = Array.from(cokeImagesContainer.getElementsByClassName('coke-item'));
        cokeItems.sort((a, b) => {
            const nameA = a.querySelector('.coke-label').textContent;
            const nameB = b.querySelector('.coke-label').textContent;
            return isAscending ? nameB.localeCompare(nameA) : nameA.localeCompare(nameB); // Reverse logic
        });

        // Clear and re-append sorted items
        cokeImagesContainer.innerHTML = '';
        cokeItems.forEach(item => cokeImagesContainer.appendChild(item));
        
        // Add a nice animation effect
        cokeItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 300);
            }, index * 100);
        });

        // Update sort order and indicator
        isAscending = !isAscending;
        sortIndicator.textContent = `Current Sort: ${isAscending ? 'Ascending' : 'Descending'}`;
    });
};