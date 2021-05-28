$(function () {
    $('#getProducts').on('click', function () {
        $.ajax({
            url: '/products',
            success: function (products) {
                let tBody = $('tbody');
                tBody.html('');
                products.forEach(product => {
                    tBody.append(`
                        <tr>
                            <td class="id">${product.id}</td>
                            <td>
                                <input type="text" class="name" value="${product.name}">
                            </td>
                            <td>
                                <button class="update-button">Update</button>
                                <button class="delete-button">Delete</button>
                            </td>
                        </tr>
                    `);
                });
            }
        });
    });
    $('#productForm').on('submit', function (event) {
        event.preventDefault();
        let newProduct = $('#newProduct');
        $.ajax({
            url: '/products',
            method: 'POST',
            data: {
                name: function() {
                    console.log(newProduct.val())
                    return newProduct.val();
                }
            },
            success: function (response) {
                console.log(response);
            }
        });
    });
});