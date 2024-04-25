export const getOne = (arr)=>{
    return arr[Math.floor(Math.random() * arr.length)];
}

export const getBySize = (arr, size)=>{
    const randomArr = arr.slice().sort(()=>Math.random() - 0.5);
    return randomArr.slice(0, size);
}

export const getContinuousBySize = (arr, size)=>{
    const index = Math.floor(Math.random() * (arr.length - size));
    return arr.slice(index, index + size);
}


export const randIndex = (arr)=>{
    return Math.floor(Math.random() * arr.length);
}

const randLength5ArrayIndexes = [
    [1,0,3,4,2],
    [1,0,4,2,3],
    [1,2,0,4,3],
    [1,2,3,4,0],
    [1,2,4,0,3],
    [1,3,0,4,2],
    [1,3,4,0,2],
    [1,3,4,2,0],
    [1,4,0,2,3],
    [1,4,3,0,2],
    [1,4,3,2,0],
    [2,0,1,4,3],
    [2,0,3,4,1],
    [2,0,4,1,3],
    [2,3,0,4,1],
    [2,3,1,4,0],
    [2,3,4,0,1],
    [2,3,4,1,0],
    [2,4,0,1,3],
    [2,4,1,0,3],
    [2,4,3,0,1],
    [2,4,3,1,0],
    [3,0,1,4,2],
    [3,0,4,1,2],
    [3,0,4,2,1],
    [3,2,0,4,1],
    [3,2,1,4,0],
    [3,2,4,0,1],
    [3,2,4,1,0],
    [3,4,0,1,2],
    [3,4,0,2,1],
    [3,4,1,0,2],
    [3,4,1,2,0],
    [4,0,1,2,3],
    [4,0,3,1,2],
    [4,0,3,2,1],
    [4,2,0,1,3],
    [4,2,1,0,3],
    [4,2,3,0,1],
    [4,2,3,1,0],
    [4,3,0,1,2],
    [4,3,0,2,1],
    [4,3,1,0,2],
    [4,3,1,2,0]
];


const randLength5ArrayIndexesHitMax1 = [
    [1,0,2,4,3],
    [1,0,3,2,4],
    [1,0,3,4,2],
    [1,0,4,2,3],
    [1,0,4,3,2],
    [1,2,0,3,4],
    [1,2,0,4,3],
    [1,2,3,0,4],
    [1,2,3,4,0],
    [1,2,4,0,3],
    [1,2,4,3,0],
    [1,3,0,2,4],
    [1,3,0,4,2],
    [1,3,2,0,4],
    [1,3,2,4,0],
    [1,3,4,0,2],
    [1,3,4,2,0],
    [1,4,0,2,3],
    [1,4,0,3,2],
    [1,4,2,0,3],
    [1,4,2,3,0],
    [1,4,3,0,2],
    [1,4,3,2,0],
    [2,0,1,3,4],
    [2,0,1,4,3],
    [2,0,3,1,4],
    [2,0,3,4,1],
    [2,0,4,1,3],
    [2,0,4,3,1],
    [2,1,0,4,3],
    [2,1,3,0,4],
    [2,1,3,4,0],
    [2,1,4,0,3],
    [2,1,4,3,0],
    [2,3,0,1,4],
    [2,3,0,4,1],
    [2,3,1,0,4],
    [2,3,1,4,0],
    [2,3,4,0,1],
    [2,3,4,1,0],
    [2,4,0,1,3],
    [2,4,0,3,1],
    [2,4,1,0,3],
    [2,4,1,3,0],
    [2,4,3,0,1],
    [2,4,3,1,0],
    [3,0,1,2,4],
    [3,0,1,4,2],
    [3,0,2,1,4],
    [3,0,2,4,1],
    [3,0,4,1,2],
    [3,0,4,2,1],
    [3,1,0,2,4],
    [3,1,0,4,2],
    [3,1,2,4,0],
    [3,1,4,0,2],
    [3,1,4,2,0],
    [3,2,0,1,4],
    [3,2,0,4,1],
    [3,2,1,0,4],
    [3,2,1,4,0],
    [3,2,4,0,1],
    [3,2,4,1,0],
    [3,4,0,1,2],
    [3,4,0,2,1],
    [3,4,1,0,2],
    [3,4,1,2,0],
    [3,4,2,0,1],
    [3,4,2,1,0],
    [4,0,1,2,3],
    [4,0,1,3,2],
    [4,0,2,1,3],
    [4,0,2,3,1],
    [4,0,3,1,2],
    [4,0,3,2,1],
    [4,1,0,2,3],
    [4,1,0,3,2],
    [4,1,2,0,3],
    [4,1,3,0,2],
    [4,1,3,2,0],
    [4,2,0,1,3],
    [4,2,0,3,1],
    [4,2,1,0,3],
    [4,2,1,3,0],
    [4,2,3,0,1],
    [4,2,3,1,0],
    [4,3,0,1,2],
    [4,3,0,2,1],
    [4,3,1,0,2],
    [4,3,1,2,0],
    [4,3,2,0,1],
    [4,3,2,1,0],
    [0,1,4,2,3],
    [0,3,4,1,2],
    [0,3,1,4,2],
    [0,3,1,2,4],
    [0,4,1,3,2],
    [0,1,3,4,2],
    [0,2,4,1,3],
    [0,4,1,2,3],
    [0,3,2,4,1],
    [0,4,3,2,1],
    [0,4,3,1,2],
    [0,2,3,4,1],
    [0,2,4,3,1],
    [0,3,4,2,1],
    [0,4,2,1,3],
    [0,2,3,1,4],
    [0,2,1,4,3]
];


export const randLength5Array = (arr)=>{
    const indexes = getOne(randLength5ArrayIndexes);
    return indexes.map(i=>arr[i]);
}