const tableBody = document.getElementById('tableBody');
const getOrderData=async()=>{
    let order;
        await fetch(`https://slimfitbackend.vercel.app/order`)
        .then((res) => res.json())
        .then((result) => {order=result })
        .catch((error) => console.error(error))
    
    let tableHtml;
    tableHtml=order.map((order,key)=>`
    <tr class="order">
    <td class="order-number" data-title="Order">
        <span href="*">#${key+1}</span>
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