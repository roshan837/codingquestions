function maxSumK(arr,k){//problem 1
    let sum=0;
    let setarr= new Set(arr);
    arr=[...setarr];
    for(let i=arr.length-k;i<arr.length;i++)sum+=arr[i];
    return sum;
}

function triplets(arr){
    let n=arr.length;
    for(let i=0;i<n-2;i++){
        for(let j=i+1;j<n-1;j++){
            for(let k=j+1;k<n;k++){
                if(arr[i]+arr[j]+arr[k]===0)console.log(arr[i],arr[j],arr[k]);
            }
        }
    }
}

function palindronme(str){//problem3
    str=str.toLowerCase()
    let n=str.length;
    for(let i=0;i<str.length/2;i++)if(str[i]!==str[n-i-1])return false;
    return true;
}
console.log(maxSumK([1,2,3,4,3,4,3,2,1],3));
triplets([ -1, 0, 1, 2, -1, 4])
console.log(palindronme("anaana"))
