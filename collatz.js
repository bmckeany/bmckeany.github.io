function collatz(startNum)
{
    let currNum = startNum;
    let count = 0;
    while(currNum > 1)
    {
        if(currNum % 2 == 0)
        {
            currNum /= 2;
        } else {
            currNum = currNum * 3 + 1;
        }
        count++;
    }
    return count;
}

let recordLength = 1;
let recordNum = 0;
for(let i = 0; i < 1000000; i++)
{
    let currLength = collatz(i);
    if(currLength > recordLength)
    {
        recordLength = currLength;
        recordNum = i;
    }
}
console.log(recordLength + "(" + recordNum + ")");

document.getElementById("recordNumber").innerHTML = recordNum;
document.getElementById("recordLength").innerHTML = recordLength;
