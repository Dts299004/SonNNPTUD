
function displayResult(title, content) {
    const resultsDiv = document.getElementById('results');
    const box = document.createElement('div');
    box.className = 'result-box';

    let contentHtml = '';
    if (typeof content === 'object') {
        contentHtml = '<pre>' + JSON.stringify(content, null, 2) + '</pre>';
    } else {
        contentHtml = `<p class="console-log">> ${content}</p>`;
    }

    box.innerHTML = `<h2>${title}</h2>${contentHtml}`;
    resultsDiv.appendChild(box);
    console.log(`--- ${title} ---`);
    console.log(content);
}


function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
displayResult('Câu 1: Constructor Product', 'Đã khai báo function Product(id, name, price, quantity, category, isAvailable)');


const products = [
    new Product(1, "Laptop Dell XPS", 35000000, 10, "Electronics", true),
    new Product(2, "iPhone 15 Pro", 28000000, 5, "Electronics", true),
    new Product(3, "Keyboard Keychron", 2500000, 0, "Accessories", false),
    new Product(4, "Mouse Logitech", 1200000, 15, "Accessories", true),
    new Product(5, "Monitor LG 4K", 9500000, 3, "Electronics", true),
    new Product(6, "Headphone Sony", 4500000, 8, "Accessories", true)
];
displayResult('Câu 2: Mảng products khởi tạo', products);


const namePriceList = products.map(product => ({
    name: product.name,
    price: product.price
}));
displayResult('Câu 3: Mảng chỉ chứa name và price', namePriceList);


const inStockProducts = products.filter(product => product.quantity > 0);
displayResult('Câu 4: Sản phẩm còn hàng (quantity > 0)', inStockProducts);


const hasExpensiveProduct = products.some(product => product.price > 30000000);
const expensiveProductsList = products.filter(product => product.price > 30000000);
displayResult('Câu 5: Có sản phẩm giá trên 30.000.000 không?', {
    result: hasExpensiveProduct,
    details: expensiveProductsList
});


const accessories = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessories.every(p => p.isAvailable === true);
const availableAccessories = accessories.filter(p => p.isAvailable === true);
displayResult('Câu 6: Tất cả sản phẩm "Accessories" có đang bán không?', {
    result: allAccessoriesAvailable,
    details: availableAccessories
});


const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);

const formattedTotal = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalInventoryValue);
displayResult('Câu 7: Tổng giá trị kho hàng', `${totalInventoryValue} (${formattedTotal})`);

let q8Result = [];
for (const product of products) {
    const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
    const line = `${product.name} - ${product.category} - ${status}`;
    q8Result.push(line);
}
displayResult('Câu 8: for...of in ra thông tin', q8Result);


let q9Result = [];
if (products.length > 0) {
    const sampleProduct = products[0];
    for (const key in sampleProduct) {
        q9Result.push(`${key}: ${sampleProduct[key]}`);
    }
}
displayResult('Câu 9: for...in duyệt thuộc tính sản phẩm đầu tiên', q9Result);


const activeAndInStockNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
displayResult('Câu 10: Tên sản phẩm Đang bán và Còn hàng', activeAndInStockNames);
