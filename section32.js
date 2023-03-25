function FindArr(arr)
{
    let res=arr.map(function(value){
        return value*value;
    })

    console.log(res);
}

const a=[1,3,5,2,4];
FindArr(a);