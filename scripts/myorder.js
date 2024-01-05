const tableBody = document.getElementById('tableBody');
const getOrderData=async()=>{
    const userEmail=localStorage.getItem("userEmail")
    let order;
        await fetch(`https://slimfitbackend.vercel.app/order`)
        .then((res) => res.json())
        .then((result) => {order=result })
        .catch((error) => console.error(error))
        const filteredObjects = order.filter(function(obj) {
            return obj.email === userEmail;
          });
    let tableHtml;
    tableHtml=filteredObjects.map((order,key)=>`
    <tr class="order">
    <td class="order-number" data-title="Order">
        <span>#${key+1}</span>
    </td>

    <td class="order-date" data-title="Date">
        ${order.date}
    </td>

    <td class="order-status" data-title="Status">
        ${order.email}
    </td>

    <td class="order-total" data-title="Total">
        <span class="amount">${order.total}</span>
    </td>

    <td class="order-actions" data-title="Action">
        Every ${order.schedule} weeks
    </td>
</tr>
    `).join('');
    tableBody.innerHTML = tableHtml;
}
getOrderData();