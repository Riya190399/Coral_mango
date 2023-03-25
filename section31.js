function FindArr(arr)
{
    let res=arr.filter(function(value){
        if(arr.indexOf(value)%2 ==0)
        return value;
    })

    console.log(res);
}

const a=[1,3,5,2,4];
FindArr(a);