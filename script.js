const stars = document.querySelectorAll('.stars').forEach(item =>
    item.addEventListener('click', () =>
        item.parentNode.dataset.totalValue = item.dataset.itemValue
    )
)