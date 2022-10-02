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
    "AMD Ryzen 3 1200 (12nm)": "6314",
    "Intel Core i7-12700K": "34614",
    "Intel Core i5-12600K": "27677",
    "Intel Core i5-12400F": "19783",
    "Intel Core i9-12900K": "41463",
    "Intel Core i3-12100F": "14379",
    "Intel Core i9-12900KS": "44781",
    "Intel Core i5-12600KF": "27233",
    "Intel Core i3-10100F": "8848",
    "AMD Ryzen 9 7950X": "64572",
    "Intel Core i5-10400F": "12391",
    "Intel Core i7-11700K": "24669",
    "Intel Core i7-12700KF": "34381",
    "AMD Threadripper 3990X": "81282",
    "Intel Core i5-12400": "19501",
    "Intel Core i9-11900K": "25550",
    "Intel Core i7-12700F": "31518",
    "AMD Ryzen 5 7600X": "28265",
    "Intel Core i5-11400F": "17200",
    "AMD Ryzen 9 7900X": "51198",
    "Intel Core i7-10700K": "19190",
    "Intel Core i5-11600K": "19736",
    "Intel Core i3-12100": "14362",
    "Intel Core i5-10400": "12307",
    "Intel Core i9-12900KF": "41502",
    "Intel Core i9-10900K": "23574",
    "Intel Core i7-9700K": "14555",
    "Intel Core i7-12700": "31285",
    "Intel Core i3-10105F": "9106",
    "Intel Core i9-9900K": "18636",
    "Intel Core i5-12600": "21182",
    "Intel Core i7-8700K": "13795",
    "Intel Core i5-9400F": "9543",
    "Intel Core i5-11400": "17074",
    "Intel Core i7-11700KF": "24091",
    "Intel Core i7-7700K": "9673",
    "Intel Core i3-10100": "8767",
    "Intel Core i5-12500": "20303",
    "Intel Celeron E1400": "671",
    "Intel Core i7-6700K": "8971",
    "Intel Core i7-10700F": "17008",
    "Intel Core i5-10600K": "14506",
    "Intel Core i9-10900KF": "23319",
    "Intel Core i5-9600K": "10774",
    "Intel Core i7-10700KF": "19033",
    "AMD Threadripper 3970X": "63548",
    "Intel Celeron G5900": "2672",
    "Intel Core i5-10600KF": "14518",
    "Intel Core i7-4790K": "8059",
    "Intel Core i9-12900": "36307",
    "AMD Threadripper 3960X": "54803",
    "Intel Core i9-10850K": "22895",
    "Intel Core i7-8700": "13005",
    "Intel Core i5-8400": "9240",
    "AMD Athlon 3000G (14nm)": "4483",
    "AMD Ryzen 5 1600 (14nm)": "12319",
    "Intel Core i5-6600K": "6329",
    "Intel Core i9-11900KF": "25423",
    "AMD Threadripper 2990WX": "32370",
    "Intel Core i9-13900K": "54433",
    "Intel Core i5-11600KF": "19705",
    "Intel Celeron G6900": "4333",
    "Intel Core i9-12900F": "37342",
    "Intel Core i7-10700": "16809",
    "Intel Core i7-11700F": "21208",
    "Intel Pentium Gold G6400": "4137",
    "Intel Core i7-3770": "6397",
    "Intel Core i9-10980XE": "33263",
    "Intel Core i7-7700": "8653",
    "Intel Core i7-6700": "8086",
    "Intel Core i5-6500": "5657",
    "Intel Core i9-9900KF": "18599"
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