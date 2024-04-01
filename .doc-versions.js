var versionNodes = [
{version: "v0.9.0", url: "https://anoma.github.io/anoma/v0.9.0/"},
{version: "v0.8.0", url: "https://anoma.github.io/anoma/v0.8.0/"},
{version: "v0.7.0", url: "https://anoma.github.io/anoma/v0.7.0/"},
{version: "v0.6.0", url: "https://anoma.github.io/anoma/v0.6.0/"},
{version: "v0.5.0", url: "https://anoma.github.io/anoma/v0.5.0/"},
{version: "v0.4.0", url: "https://anoma.github.io/anoma/v0.4.0/"},
{version: "v0.3.0", url: "https://anoma.github.io/anoma/v0.3.0/"},
{version: "v0.2.0", url: "https://anoma.github.io/anoma/v0.2.0/"},
{version: "v0.10.0", url: "https://anoma.github.io/anoma/v0.10.0/"},
{version: "v0.1.0", url: "https://anoma.github.io/anoma/v0.1.0/"},
]

function comparePartials(versionA, versionB) {
    let a = versionA.version;
    let b = versionB.version;
    if (a === b) {
        return 0;
    }
    let splitA = a.split('.');
    let splitB = b.split('.');
    const length = Math.max(splitA.length, splitB.length);
    for (let i = 0; i < length; i++) {
        if (parseInt(splitA[i]) > parseInt(splitB[i]) ||
            ((splitA[i] === splitB[i]) && isNaN(splitB[i + 1]))) {
            return 1;
        }
        if (parseInt(splitA[i]) < parseInt(splitB[i]) ||
            ((splitA[i] === splitB[i]) && isNaN(splitA[i + 1]))) {
            return -1;
        }
    }
}

versionNodes = versionNodes.sort(comparePartials).reverse()
