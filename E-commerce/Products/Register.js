// import prod from "./prod.json"
exports.register=async(req,res)=>{
    res.send({
        "companyName":"gomart",
        "clientID":"37bb493-73d3-47ea-8675-21f66ef9b375",
        "clientSecert":"HVIQBVTGEmaED",
        "ownerName":"Rahul",
        "ownerEmail":"rahul@abc.edu",
        "roll no":"1"
    })
}
 exports.auth=async(req,res)=>{
    res.send({
        "token_type":"Bearer",
        "access_token":"eyywscycyy123456bwvvjvjjhx.evs9hz77wivwvx7w79wx0g9ev97vxv9evxsibjgczaghxyzyzpiaxuppobcpebpicig8o76h989de9bdy739u99dghe99y8egdg8e9ye9hp9c0e9ch0ecge879gc8gbe8ygfce8yf7euecpiebbpcpedbcneonpocbipbcipbp",
        "expires_in":"1710835268"
    })
    res.status(200).json({
        msg:"Success"
        })
 }
 exports.details=async(req,res)=>{
    res.send(
        [ {
    "productName":"Laptop 14",
    "price":9254,
    "rating":3,
    "discount":56,
    "availability":"Yes"
},
{
    "productName":"Laptop 10",
    "price":7145,
    "rating":2.74,
    "discount":15,
    "availability":"Yes"
},
{
    "productName":"Laptop 10",
    "price":4101,
    "rating":2.67,
    "discount":37,
    "availability":"out-of-stock" 
},
{
    "productName":"Laptop 1",
    "price":2236,
    "rating":4.7,
    "discount":63,
    "availability":"Yes"
},
{
    "productName":"Laptop 13",
    "price":1244,
    "rating":4.5,
    "discount":45,
    "availability":"out-of-stock" 
},
{
    "productName":"Laptop 3",
    "price":9102,
    "rating":4.44,
    "discount":98,
    "availability":"out-of-stock"
},
{
    "productName":"Laptop 11",
    "price":2652,
    "rating":4.12,
    "discount":70,
    "availability":"Yes"
},
{
    "productName":"Laptop 4",
    "price":1258,
    "rating":3.8,
    "discount":33,
    "availability":"Yes"

}
]
    )
 }