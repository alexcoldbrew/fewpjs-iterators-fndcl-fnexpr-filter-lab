// typical function writing

function findMatching(drivers, string) {
    return drivers.filter(n => n.toLowerCase() === string.toLowerCase())
}

// should be writing these functions this way?

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(n => n.slice(0, string.length) === string)
}

const matchName = (drivers, string) => {
    return drivers.filter(n => n.name === string)
}