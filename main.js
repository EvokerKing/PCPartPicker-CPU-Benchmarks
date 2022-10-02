const scores = {
    "AMD Ryzen 3 3200G": "7190",
    "AMD Ryzen 5 5600X": "21970",
    "AMD Ryzen 7 5800X": "28142",
    "AMD Ryzen 9 5900X": "39315",
    "AMD Ryzen 5 5600G": "19834",
    "AMD Ryzen 5 5600": "21505",
    "AMD Ryzen 5 3600": "17816",
    "AMD Ryzen 9 5950X": "45852",
    "AMD Ryzen 7 5800X3D": "27567",
    "AMD Ryzen 7 5700X": "26622",
    "AMD Ryzen 5 5500": "19483",
    "AMD Ryzen 7 5700G": "24566",
    "AMD Ryzen 5 4500": "15873",
    "AMD Ryzen 7 3700X": "22710",
    "AMD Ryzen 9 3900X": "32764",
    "AMD Ryzen 5 2600": "13246",
    "AMD Ryzen 7 3800X": "23310",
    "AMD Ryzen 3 4100": "11336",
    "AMD Ryzen 7 2700X": "17604",
    "AMD Ryzen 5 3600X": "18298",
    "AMD Ryzen 5 4600G": "15604",
    "AMD Ryzen 3 3100": "11650",
    "AMD Ryzen 5 2600X": "14028",
    "AMD Ryzen 9 3950X": "39034",
    "AMD Ryzen 5 3400G": "9338",
    "AMD Ryzen 3 2200G": "6775",
    "AMD Ryzen 5 1600 (12nm)": "12319",
    "AMD Ryzen 7 2700": "15785",
    "AMD Ryzen 9 3900XT": "32951",
    "AMD Ryzen 7 3800XT": "23766",
    "AMD Ryzen 5 2400G": "8729",
    "AMD Ryzen 3 3300X": "12694",
    "AMD Ryzen 5 3600XT": "18734",
    "AMD Ryzen 5 3500X": "13267",
    "AMD Ryzen 5 3500": "12830",
    "AMD Ryzen 3 1200 (12nm)": "6314"
};

const changeProductName = (mutationList, observer) => {
    mutationList.forEach( (mutation) => {
        mutation.addedNodes.forEach( (node) => {
            if(node.nodeName === 'TR') {
                const name = node.getElementsByTagName('p');
                const nameText = name[0].innerText;

                if (nameText in scores) {
                    name[0].innerText = `${nameText} - ${scores[nameText]}`
                } else {
                    scores[nameText] = ""
                }
            }
        })
    })
}

const startObserver = () => {
    const elem = document.querySelector('.productList--detailed');
    const config = {attributes: true, childList: true, subtree: true};
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    const observer = new MutationObserver(changeProductName);
    observer.observe(elem, config);
}

window.onload = (event) => {
    startObserver();
}

console.log(scores)