
// ---------------- Task 1: addition ----------------
function addition(a, b) {
  return a + b;
}
console.log("Task 1 - addition(2, 3):", addition(2, 3));

// ---------------- Task 2: Bitwise ----------------
function bitwiseAND(a, b) { return a & b; }
function bitwiseOR(a, b)  { return a | b; }
function bitwiseXOR(a, b) { return a ^ b; }

console.log("Task 2 - bitwiseAND(5, 3):", bitwiseAND(5, 3));
console.log("Task 2 - bitwiseOR(5, 3):", bitwiseOR(5, 3));
console.log("Task 2 - bitwiseXOR(5, 3):", bitwiseXOR(5, 3))
// ---------------- Task 3: addUp ----------------
function addUp(a) {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
}

console.log("Task 3 - addUp(4):", addUp(4));
// ---------------- Task 4: progressBar ----------------
function progressBar(a) {
  let filled = Math.floor(a / 10);
  return "#".repeat(filled) + "-".repeat(10 - filled);
}

console.log("Task 4 - progressBar(10):", progressBar(10));
console.log("Task 4 - progressBar(40):", progressBar(40));
console.log("Task 4 - progressBar(49):", progressBar(49));
console.log("Task 4 - progressBar(100):", progressBar(100));

// ---------------- Task 5: minMax ----------------
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
console.log("Task 5 - minMax([1,2,3,4,5,6]):", minMax([1, 2, 3, 4, 5, 6]));
// ---------------- Task 6: calculateRepoStats ----------------
function calculateRepoStats(repos) {
  const stars = repos.map(r => r.stars);
  const maxStars = Math.max(...stars);
  const minStars = Math.min(...stars);
  const total = stars.reduce((sum, s) => sum + s, 0);
  const avgStars = Math.floor(total / stars.length);
  const varianceScore = Math.abs(maxStars - minStars);
  return { maxStars, minStars, avgStars, varianceScore };
}
const repos = [
  { name: 'repo-a', stars: 12 },
  { name: 'repo-b', stars: 45 },
  { name: 'repo-c', stars: 3 }
];
console.log("Task 6 - calculateRepoStats:", calculateRepoStats(repos));

// ---------------- Task 7: calculateFinalPrice ----------------
function round2(n) {
  return Math.round(n * 100) / 100;
}

function calculateFinalPrice(basePrice, taxRate, discountPercentage) {
  const discounted = round2(basePrice * (1 - discountPercentage / 100));
  const tax = round2(discounted * taxRate / 100); 
  const finalPrice = round2(discounted + tax);
  const loyaltyPoints = Math.ceil(finalPrice);
  return { finalPrice, loyaltyPoints };
}
  
console.log("Task 7 - calculateFinalPrice(100, 10, 20):", calculateFinalPrice(100, 10, 20));
console.log("Task 7 - calculateFinalPrice(49.99, 5, 10):", calculateFinalPrice(49.99, 5, 10));


// ---------------- Task 8: paginateData ----------------
function paginateData(items, pageNumber, pageSize = 5) {
  const totalPages = Math.ceil(items.length / pageSize);
  const start = (pageNumber - 1) * pageSize;
  const data = items.slice(start, start + pageSize);

  return {
    data: data,
    currentPage: pageNumber,
    totalPages: totalPages,
    hasNext: pageNumber < totalPages,
          hasPrev: pageNumber > 1
  };
}
const allProducts = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Desk', 'Chair', 'Webcam', 'Headphones'];
console.log("Task 8 - paginateData(allProducts, 2, 3):", paginateData(allProducts, 2, 3));
console.log("Task 8 - paginateData(allProducts, 1) [default size 5]:", paginateData(allProducts, 1));

