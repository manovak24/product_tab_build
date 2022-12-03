const tabs = document.querySelectorAll('.tab');
const contentCtrs = document.querySelectorAll('.content-ctr');

const activeClass = (e) => {
    for (const contentCtr of contentCtrs) {
        contentCtr.classList.remove('content-active');
        if(e.innerText === contentCtr.id) {
            contentCtr.classList.add('content-active')
        }
    }

    tabs.forEach(tab => {
        tab.classList.remove('tab-active');
    })
    e.classList.add('tab-active');
}

for (const tab of tabs) {
    tab.addEventListener('click', function(event) {
        // console.log(event.currentTarget)
        activeClass(event.currentTarget)
    })
}