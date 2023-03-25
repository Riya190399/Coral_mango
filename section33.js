function FindArr(arr)
{
    let newArr=[];
    let k=0;
    for(let i=0;i<arr.length;i++)
    {
        if(i%2==0)
        {
            newArr[k]=arr[i]*arr[i];
            k++;
        }
    }

    console.log(newArr);
}

const a=[1,3,5,2,4];
//can be taken from user as well

FindArr(a);