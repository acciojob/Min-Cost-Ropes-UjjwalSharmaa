function mincost(arr)
{ 
	
//write your code here
// return the min cost
	let totalCost = 0;

  while (arr.length > 1) {
    // Sort array to get two smallest elements
    arr.sort((a, b) => a - b);

    const first = arr.shift();   // smallest
    const second = arr.shift();  // second smallest

    const cost = first + second;
    totalCost += cost;

    arr.push(cost); // push the combined rope back
  }

  return totalCost;
  
}

module.exports=mincost;
