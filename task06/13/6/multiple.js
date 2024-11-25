onmessage = function(e)
{
    let [num1, num2] = e.data;
    let result = num1*num2;
    postMessage(result);
}